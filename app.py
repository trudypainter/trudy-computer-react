from flask import Flask, send_from_directory, redirect, request
from sqlalchemy.sql.sqltypes import Integer
from flask_sqlalchemy import SQLAlchemy
import requests
import json
from urllib.parse import urlencode
from dateutil import parser
import psycopg2
import datetime
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

@app.route('/api/<project>', methods=["GET"])
def project(project):
    return "project from api"


##################
#  ⭐️ FRONTEND   #
##################
@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == '__main__':
  app.run(debug=True)

