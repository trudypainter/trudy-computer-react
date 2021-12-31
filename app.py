from flask import Flask, send_from_directory, redirect, request
from sqlalchemy.sql.sqltypes import Integer
from flask_sqlalchemy import SQLAlchemy
import requests
import json
from urllib.parse import urlencode
from dateutil import parser
import psycopg2
import datetime

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')


##################
#  ⭐️ FRONTEND   #
##################
@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')


if __name__ == '__main__':
  app.run(debug=True)

