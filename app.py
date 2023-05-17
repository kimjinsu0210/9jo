from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster1.hdgmcpn.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/info", methods=["POST"])
def bucket_post():
    myname_receive = request.form['myname_give']
    mbti_receive = request.form['mbti_give']
    hobby_receive = request.form['hobby_give']
    blog_receive = request.form['blog_give']
    comment_receive = request.form['comment_give']
    doc = { 'myname': myname_receive,
            'mbti':mbti_receive,
            'hobby':hobby_receive,
            'blog':blog_receive,
            'comment':comment_receive}
    db.info.insert_one(doc)
    return jsonify({'msg': '저장완료!'})
    
@app.route("/info", methods=["GET"])
def bucket_get():
    all_info = list(db.info.find({},{'_id':False}))
    return jsonify({'result': all_info})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)