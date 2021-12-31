from flask import Flask, send_from_directory, redirect, request
from sqlalchemy.sql.sqltypes import Integer
from flask_sqlalchemy import SQLAlchemy
import requests
import json
from urllib.parse import urlencode
from dateutil import parser
import psycopg2
import datetime

app = Flask(__name__, static_folder='build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://gyapnprijuucxd:b5d546034ef4baa6cbe6c08b8ac38f5a37ecda76e60679de14ad2b0f72e6d440@ec2-3-89-214-80.compute-1.amazonaws.com:5432/d3tt7l03ba5bep'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

#########################
#  ⭐️ BACKEND   #
#########################


##################
#  ⭐️ FRONTEND   #
##################
@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')


if __name__ == '__main__':
  app.run(debug=True)

