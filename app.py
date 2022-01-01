from flask import Flask, send_from_directory, redirect, request
from flask.helpers import send_file
from sqlalchemy.sql.sqltypes import Integer
from flask_sqlalchemy import SQLAlchemy
import requests
import json
from urllib.parse import urlencode
from dateutil import parser
import psycopg2
import markdown
import os

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')

##################
#  ⭐️ BACKEND    #
##################
@app.route('/api/landing', methods=["GET"])
def landing():
    folders = os.listdir("projects")
    landing_list = []

    for folder in folders:
        f = open("projects/"+folder+"/info.json")
        data = json.load(f)
        data["url"] = folder
        landing_list.append(data)

    return {"data": landing_list}

@app.route('/api/project_url_list', methods=["GET"])
def project_list():
    folders = os.listdir("projects")
    
    return {"data": folders}

@app.route('/api/<project>', methods=["GET"])
def project(project):
    print("🟩 ", project)
    items = os.listdir("projects/" + project)

    # get markdown file
    markdown_filename = ""
    for item in items:
        print(item[-2:])
        if item[-2:] == "md":
            print("🌐")
            markdown_filename = item

    # read markdown text
    with open("projects/"+project+"/" + markdown_filename, 'r') as f:
        text = f.read()
        html = markdown.markdown(text)    
    print(html)

    # get project title
    f = open("projects/"+project+"/info.json")
    data = json.load(f)
    project_title = data['title']

    response = {
        "title": project_title,
        "markdown": html,
    }
    print("🟩🟨")
    print(response)
    return response


##################
#  ⭐️ FRONTEND   #
##################
@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')

@app.route('/608-writeup', methods=["GET"])
def writeup():
    return send_file('projects/spotify-monster/FINAL_WRITEUP/final_writeup.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
  app.run(debug=True)

