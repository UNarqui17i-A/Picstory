#Script to define storage microservice
import settings as st
import json
import boto3
from flask import request
from eve import Eve

s3 = boto3.resource('s3')
client = boto3.client('s3')
app = Eve()
global post

#Returns an url from a given ID of an object in AWS db
@app.route('/posts/<post_id>/update_url',methods=['POST'])
def url(post_id):
    url = 'https://s3.amazonaws.com/'+st.main_bucket+'/'+post_id
    return json.dumps({'image_url' : url})

#Gets id and base64 image from POST operation and stores it in AWS db
@app.route('/image/create',methods=['POST'])
def create():
    content = request.get_json(silent = True)
    s3.Bucket(st.main_bucket).put_object(Key=content['uuid'], Body=content['codedimage'])
    return json.dumps({'uuid':content['uuid'],'codedimage' : content['codedimage']})

#Deletes an object from main_bucket
@app.route('/delete',methods=['POST'])
def delete():
        content = request.get_json(silent=True)
        client.delete_object(Bucket=st.main_bucket,Key =content['id'])
        return json.dumps({'success': True}), 200

if __name__ == '__main__':
    app.run(port=st.def_port)