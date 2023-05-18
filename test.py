from flask import Flask, render_template, request, jsonify, redirect
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster0.bfdudll.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('subpage.html')

@app.route("/members", methods=["POST"])
def mars_post():
    myname_receive = request.form['myname_give']
    mbti_receive = request.form['mbti_give']
    hobby_receive = request.form['hobby_give']
    merit_receive = request.form['merit_give']
    blog_receive = request.form['blog_give']
    style_receive = request.form['style_give']
    signature_receive = request.form['signature_give']
    goal_receive = request.form['goal_give']
    promise_receive = request.form['promise_give']

    doc = {
        'myname':myname_receive,
        'mbti':mbti_receive,
        'hobby':hobby_receive,
        'merit':merit_receive,
        'blog':blog_receive,
        'style':style_receive,
        'signature':signature_receive,
        'goal':goal_receive,
        'promise':promise_receive
    }
    db.members.insert_one(doc)

    return jsonify({'msg':'저장 완료!'})

@app.route("/members", methods=["GET"])
def mars_get():
    members_info = list(db.members.find({},{'_id':False}))
    return jsonify({'result':members_info})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)