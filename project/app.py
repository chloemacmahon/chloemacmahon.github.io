from flask import Flask, render_template, request
from flask_flatpages import FlatPages 
from flask_frozen import Freezer

app = Flask(__name__)
app.config.from_pyfile('settings.py')
pages = FlatPages(app)
freezer = Freezer(app)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/java-info/")
def javaInfo():
    return render_template("java-info.html")

@app.route("/python-info/")
def pythonInfo():
    return render_template("python-info.html")

@app.route("/c-sharp-info/")
def cSharpInfo():
    return render_template("c-sharp-info.html")

@app.route("/interesting/")
def showInteresting():
    return render_template("interesting.html")

@app.route("/full-cv/")
def showFullCV():
    return render_template("full-cv.html")