from flask import Flask, render_template, request, jsonify, redirect
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster1.hdgmcpn.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return redirect('/static/html/subpage.html')

@app.route("/input", methods=["POST"])
def input():
    name = request.form['name']
    mbti = request.form['mbti']
    hobby = request.form['hobby']
    merit = request.form['merit']
    style = request.form['style']
    blog = request.form['blog']
    doc = {
        'name': name,
        'mbti': mbti,
        'hobby': hobby,
        'merit': merit,
        'style': style,
        'blog': blog
    }
    db.introduce.insert_one(doc)
    return redirect('/static/html/subpage.html')

@app.route("/input", methods=["GET"])
def bucket_get():
    all_info = list(db.introduce.find({},{'_id':False}))
    return jsonify({'result': all_info})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)