from flask import Flask, send_from_directory, redirect, request, Response
from flask.helpers import make_response, send_file
from sqlalchemy.sql.sqltypes import Integer
from flask_sqlalchemy import SQLAlchemy
import json
from urllib.parse import urlencode
from datetime import datetime, timedelta
import markdown
import os
import requests
import re

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://jsuwurmosbaick:214e623fa4b05d9ae3dcd826ab63af15a6663c85e68699ef447a57fb53b7f800@ec2-18-234-17-166.compute-1.amazonaws.com:5432/db212f5dgbqvol'

db = SQLAlchemy(app)


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
    api_key = "3fc9710dd566f607ef8248e37e80416a"
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

    response = make_response(json.dumps({
        "data": data + data,
    }))
    response.headers["Access-Control-Allow-Origin"] = "*"

    return response

# 💗 for the scroller
@app.route('/api/landing', methods=["GET"])
def landing():
    folders = os.listdir("projects")
    landing_list = []

    for folder in folders:
        f = open("projects/"+folder+"/info.json")
        data = json.load(f)
        data["url"] = folder
        data['image'] = "https://github.com/trudypainter/trudy-computer-react/blob/main/thumbnails/" + \
                        data['image'] + "?raw=true"
        landing_list.append(data)

    # sort by year
    landing_list = sorted(landing_list, key=lambda d: d['year'], reverse=True) 

    return {"data": landing_list}

# 💛 url list
@app.route('/api/project_url_list', methods=["GET"])
def project_list():
    folders = os.listdir("projects")
    

    return {"data": folders}

# 💚 project page
def update_md_image(text, project):
    image_list = re.findall("!\[(.*?)\]\((.*?)\)", text)

    for img in image_list:
        og_img = "![{text}]({link})".format(text=img[0], link=img[1])
        new_image_link = "![{text}](https://github.com/trudypainter/trudy-computer-react/blob/main/projects/{project}/{link}?raw=true)".format(text=img[0], project=project, link=img[1])
        text = text.replace(og_img, new_image_link)

    return text

@app.route('/api/<project>', methods=["GET"])
def project(project):
    items = os.listdir("projects/" + project)

    # get markdown file
    markdown_filename = ""
    for item in items:
        print(item[-2:])
        if item[-2:] == "md":
            markdown_filename = item

    # read markdown text
    with open("projects/"+project+"/" + markdown_filename, 'r') as f:
        text = f.read()
        print("🌐", text)
        text = update_md_image(text, project)
        html = markdown.markdown(text)    

    # get project title
    f = open("projects/"+project+"/info.json")
    data = json.load(f)
    project_title = data['title']

    response = {
        "title": project_title,
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
    return app.send_static_file('index.html')

@app.route('/608-writeup', methods=["GET"])
def writeup():
    return send_file('projects/spotify-monster/FINAL_WRITEUP/final_writeup.html')

@app.route('/resume', methods=["GET"])
def resume():
    return send_file("TrudyPainterResume.pdf")

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
  app.run(debug=True)

