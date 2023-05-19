from flask import Flask, render_template, request, jsonify, redirect, url_for
app = Flask(__name__)
from bson.json_util import dumps

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster0.vvgmitw.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/information", methods=["POST"])
def information():
  
  name = request.form['name']
  user = db.introduce.find_one({'name':name},{'_id':False})
  return jsonify({'result':user})


@app.route("/input", methods=["POST"])
def input():
    name = request.form['name']
    mbti = request.form['mbti']
    hobby = request.form['hobby']
    merit = request.form['merit']
    style = request.form['style']
    blog = request.form['blog']
    signature = request.form['signature']
    goal = request.form['goal']
    promise = request.form['promise']
    comment = request.form['comment']

    doc = {
        'name': name,
        'mbti': mbti,
        'hobby': hobby,
        'merit': merit,
        'style': style,
        'blog': blog,
        'signature': signature,
        'goal': goal,
        'promise': promise,
        'comment': comment
    }
    db.introduce.insert_one(doc)
    return redirect('/static/html/input.html') 

@app.route("/modify", methods=["POST"])
def modify():
    
    name = request.form['name']
    mbti = request.form['mbti']
    hobby = request.form['hobby']
    merit = request.form['merit']
    style = request.form['style']
    blog = request.form['blog']
    signature = request.form['signature']
    goal = request.form['goal']
    promise = request.form['promise']
    comment = request.form['comment']

    db.introduce.delete_one({'name': name})
    doc = {
        'name': name,
        'mbti': mbti,
        'hobby': hobby,
        'merit': merit,
        'style': style,
        'blog': blog,
        'signature': signature,
        'goal': goal,
        'promise': promise,
        'comment': comment
        
    }
    db.introduce.insert_one(doc)
    user = db.introduce.find_one({'name':name},{'_id':False})
    return jsonify({'result':user})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5002, debug=True)
