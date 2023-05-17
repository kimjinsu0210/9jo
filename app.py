from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster0.mhkaqly.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta



@app.route("/infor", methods=["POST"])
def infor_post():
    name_receive = request.form['name_give']
    image_receive = request.form['image_give']
    mbti_receive = request.form['mbti_give']
    hobby_receive = request.form['hobby_give']
    residence_receive = request.form['residence_give']
    my_desc_receive = request.form['my_desc_give']
    doc = {
        'name': name_receive,
        'image': image_receive,
        'mbti': mbti_receive,
        'hobby': hobby_receive,
        'residence': residence_receive,
        'my_desc': my_desc_receive,
    }
    db.infor.insert_one(doc)
    return jsonify({'msg': '저장 완료!'})
    
@app.route("/infor", methods=["GET"])
def infor_get():
    all_infors = list(db.infor.find({},{'_id':False}))
    return jsonify({'result': all_infors})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
