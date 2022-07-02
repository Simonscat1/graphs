
from flask import Flask, jsonify, request, redirect, url_for
import json
from app import work_in_img

app = Flask(__name__)

@app.route('/uploer', methods= ['POST', 'GET'])
def get_post_js():
    if request.method == 'POST':
        img = request.form["data"]
        cordes = request.form.getlist("cordes[]")
        rgb = request.form.getlist('RGB[]')
        lenY = request.form["lenY"]
        work_in_img(img,cordes,rgb,lenY)
    return jsonify({'success': 'ok'})

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port = 8000)