#Script only for testing localy
import boto3
import json
import settings as st
from flask import request
from eve import Eve


app = Eve()


s3 = boto3.resource('s3')
client = boto3.client('s3')


@app.route('/checkbuckets')
def show_buckets():
    for bucket in s3.buckets.all():
        return json.dumps({'Bucket list' :'{}'.format(bucket.name)})



if __name__ == '__main__':
    app.run(port=st.def_port)