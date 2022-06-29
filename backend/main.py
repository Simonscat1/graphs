
from flask import Flask, jsonify, request, redirect, url_for
import json
from app import gw1

app = Flask(__name__)

@app.route('/uploer', methods= ['POST', 'GET'])
def get_post_js():
    if request.method == 'POST':
        img = request.form["data"]
        cordes = request.form.getlist("cordes[]")
        rgb = request.form['RGB']
        gw1(img,cordes,rgb)
    return jsonify({'success': 'ok'})

@app.route('/')
def hello_world():
    hello = 'hello world!'
    return hello




if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port = 8000)