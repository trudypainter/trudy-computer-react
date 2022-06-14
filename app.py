from flask import Flask, send_from_directory, redirect, request, Response
from flask.helpers import make_response, send_file
from sqlalchemy.sql.sqltypes import Integer
from flask_sqlalchemy import SQLAlchemy
import json
from dotenv import load_dotenv
from urllib.parse import urlencode
from datetime import datetime, timedelta, date
import markdown
import os
import requests
import re
from flask_cors import CORS

load_dotenv()

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ["SQL_DB"]
CORS(app)

db = SQLAlchemy(app)

########################
#  ⭐️ NOTION CONFIG    #
########################
notion_token = os.environ["NOTION_TOKEN"]
notion_database_id = "10e3696023bc490b8fbab03d03813d80"
notion_headers = {
    "Authorization": "Bearer " + notion_token,
    "Content-Type": "application/json",
    "Notion-Version": "2022-02-22"
}

# 💞 get the list of slugs of pages
readUrl = f"https://api.notion.com/v1/databases/{notion_database_id}/query"
res = requests.request("POST", readUrl, headers=notion_headers)
data = res.json()
results = data['results']

# list of slugs
slug_list = [result['properties']['slug']['rich_text'][0]['text']['content'] for result in results]

# dict of slug: page_id
slug_to_id_dict = dict()
for result in results:
    slug = result['properties']['slug']['rich_text'][0]['text']['content']
    _id = result['id']
    slug_to_id_dict[slug] = _id

##################
#  ⭐️ BACKEND    #
##################
class Visit(db.Model):
    visit_num = db.Column(db.String(120), primary_key=True)
    time = db.Column(db.String(120))
    location = db.Column(db.String(120))

    def __init__(self, visit_num, time, location):
        self.visit_num = visit_num
        self.time = time
        self.location = location

# 🧡 for the scroller
def get_visits():
    # read songs
    num_visits = db.session.query(Visit).count()
    
    # add new one
    entry = Visit(str(num_visits+1), "time", "location")
    db.session.add(entry)
    db.session.commit()

    print(num_visits)
    return num_visits

# 🧡 for the scroller
def get_num_songs():
    today = datetime.now()
    today = today - timedelta(hours=9)
    str_date = today.strftime("%m.%d.%Y")
    response = requests.get('https://react-flask-listening.herokuapp.com/api/' + str_date)
    json = response.json()

    return len(json["songs"])

# 🧡 for the scroller
def get_current_weather():
    api_key = os.environ['WEATHER_KEY']
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    city_name = "boston"
    
    complete_url = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=imperial"\
        .format(city="boston", api_key=api_key)
    response = requests.get(complete_url)
    json = response.json()

    description = json["weather"][0]["description"]
    temp = int(json["main"]['temp'])

    return "{} + {}".format(temp, description)

# 🧡 for the scroller
@app.route('/api/scroller_info', methods=["GET"])
def scroller():
    num_visits = get_visits()
    songs = get_num_songs()
    weather = get_current_weather()

    data = "  🎧 Songs Listened To Today: " + str(songs) + \
        " 🌤 Boston's Current Weather: " + str(weather.title()) + \
            " 🌐 Site Visits Total: " + str(num_visits)

    print(data)

    response = make_response(json.dumps({
        "data": data + data,
    }))
    response.headers["Access-Control-Allow-Origin"] = "*"

    return response

# 💗 query notion db for landing page to get grid info
@app.route('/api/landing', methods=["GET"])
def landing():
    # list to be returned
    landing_list = []

    body = {
        
            "sorts": [
        {
            "property": 'priority',
            "direction": 'ascending',
        },
        ],
    
    }

    readUrl = f"https://api.notion.com/v1/databases/{notion_database_id}/query"
    res = requests.request("POST", readUrl, headers=notion_headers, data = json.dumps(body))
    data = res.json()
    
    # gets a list of **pages** in the database
    results = data['results']
    location_set = set()
    topic_set = set()
    
    for result in results:
        proj = dict()
        
        # [1] get the title of the project
        title = result['properties']['title']['title'][0]['text']['content']
        proj['title'] = title
        
        # [2] get the location of the project
        location = result['properties']['location']['select']
        loc_json = json.dumps(location)
        location_set.add(loc_json)
        proj['location'] = loc_json
        
        # [3] get the year of the project
        year = result['properties']['year']['rich_text'][0]['text']['content']
        proj['year'] = year
        
        # [4] get the description of the project
        description = result['properties']['description']['rich_text'][0]['text']['content']
        proj['description'] = description
        
        # [5] get the thumbnail image
        try:
            thumb_url = result['icon'].get('file').get('url')
            proj['image'] = thumb_url
            # print(thumb_url)
            # response = requests.get(thumb_url)
                #img = Image.open(BytesIO(response.content))
                #print(img)
        except:
            pass

        # [6] get the tags of the project
        tags = result['properties']['tags']['multi_select']
        tag_list = []
        for tag in tags: 
            tag_json = json.dumps(tag)
            topic_set.add(tag_json)
            tag_list.append(tag_json)
        proj['tags'] = tag_list
        
        # [7] get the slug of the project
        slug = result['properties']['slug']['rich_text'][0]['text']['content']
        proj['url'] = slug
        
        # add json obj to landing list data
        proj_json = json.dumps(proj)
        landing_list.append(proj_json)

    landing_list.reverse()
    print("🟡", landing_list)
    response = make_response(json.dumps({"data": landing_list, "locations":list(location_set), "topics":list(topic_set)}))
    return response

# 💛 url list for the router
@app.route('/api/project_url_list', methods=["GET"])
def project_list():
    return {"data": slug_list}

def getTextStr(block):
    markdown_str = ""
    _type = block['type']
    
    for text_obj in block[_type]['rich_text']:
        # add link
        print(text_obj['plain_text'])
        
        if text_obj.get('href'):
            markdown_str += "[{}]({})".format(text_obj.get("plain_text"), text_obj.get('href'))
        else:
            markdown_str += text_obj.get("plain_text")
            
    return markdown_str

def getFileStr(block):
    markdown_str = ""
    _type = block['type']

    # ![Tux, the Linux mascot](/assets/images/tux.png)
    # internal upload file
    if block[_type].get('file'):
        url = block[_type]['file']["url"]
        caption = ""
        if block[_type].get("caption"):
            caption =  block[_type].get("caption")[0]['text']['content']
        
        markdown_str = "![{}]({})".format(caption, url)
        
        return markdown_str

     # external upload file
    elif block[_type]['type'] == "external":
        print(block[_type].keys())
        url = block[_type]["external"]['url']
        caption = ""
        if block[_type].get("caption"):
            caption =  block[_type].get("caption")[0]['text']['content']
        
        markdown_str = "![{}]({})".format(caption, url)
        
        return markdown_str
    return "test"

def getVimeoStr(block):
    _type = block['type']
    vimeo_id = block[_type]['external']['url'].split("/")[-1]
    return '<div style="padding:61.75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/{}?h=f3b2397a7b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'.format(vimeo_id)

def getMarkdownStrFromPageID(page_id):
    readUrl = f"https://api.notion.com/v1/blocks/" + page_id + "/children"
    res = requests.request("GET", readUrl, headers=notion_headers)
    data = res.json()
    markdown_str = ""
    
    # gets a list of **content** in the **page id**
    results = data['results']
    for block in results:

        # add md formats for strings
        _type = block['type']
        if _type == "heading_1": markdown_str += "# "
        elif _type == "heading_2": markdown_str += "## "
        elif _type == "heading_3": markdown_str += "### "
        elif _type == "bulleted_list_item": markdown_str += "* "
            
        # [a] some sort of text obj (heading, paragraph, etc)    
        if _type in ['heading_1', 'heading_2', "heading_3", 'paragraph', 'bulleted_list_item']:
            markdown_str += getTextStr(block)

        # [b] some sort of media (image, video etc)
        elif _type == "image":
            print(block)
            markdown_str += getFileStr(block)
            
        # [c] some sort of video embed (prob vimeo link)
        elif _type == "video":
            markdown_str += getVimeoStr(block)

        markdown_str += " \n\n"

    return markdown_str

# 💜 endpoint for slug of project
@app.route('/api/<project>', methods=["GET"])
def project(project):
    
    page_id = slug_to_id_dict[project]
    text = getMarkdownStrFromPageID(page_id)
    print("🍋", text)
    html = markdown.markdown(text)    

    response = {
        "markdown": html,
    }

    formatted_response = make_response(json.dumps(response))
    formatted_response.headers["Access-Control-Allow-Origin"] = "*"

    return formatted_response

##################
#  ⭐️ FRONTEND   #
##################
@app.route('/', methods=["GET"])
def index():
    print("test")
    return app.send_static_file('index.html')

@app.route('/608-writeup', methods=["GET"])
def writeup():
    return send_file('projects/spotify-monster/FINAL_WRITEUP/final_writeup.html')

@app.route('/emailresponse', methods=["POST", "GET"])
def email():
    reqdict = request.args.to_dict()
    name = "NAME: " + reqdict.get('name')
    email = "EMAIL: " + reqdict.get('email')
    emojis = "EMOJIS: " + reqdict.get('emojis')
    topics = "TOPICS: " + reqdict.get('topics')
    links = "EXTRA: " + reqdict.get('extra')

    date = "🟡" + str(datetime.now())
    items = [date, name, email, emojis, topics, links]

    page_id = "a615c5c92e4043d699ca3a0c387bd666"
    readUrl = f"https://api.notion.com/v1/blocks/" + page_id + "/children"

    blocks = [{
            "object": 'block',
            "type": 'paragraph',
            "paragraph": {
            "rich_text": [
                {
                "type": 'text',
                "text": {
                    "content": content,
                },
                },
            ],
            },
        } for content in items]

    body = {'children': blocks}
    res = requests.request("PATCH", readUrl, headers=notion_headers, data = json.dumps(body))

    return app.send_static_file('index.html')

@app.route('/resume', methods=["GET"])
def resume():
    return send_file("TrudyPainterResume.pdf")

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


##################
#  ⭐️ SPOTIFY   #
##################

@app.route('/callback', methods=["GET"])
def callback():
    print("test")
    return app.send_static_file('index.html')

if __name__ == '__main__':
  app.run(debug=True)

