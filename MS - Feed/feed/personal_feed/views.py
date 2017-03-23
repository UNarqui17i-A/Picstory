from django.shortcuts import render
from django.http import HttpResponse
import urllib2
import json
# Create your views here.


def personal_feed(request, username=None):
    end_point_docker = '192.168.99.101:8010/post?user_id='
    url = end_point_docker + username;
    serialized_data = urllib2.urlopen(url).read()
    data = json.loads(serialized_data)
    html = "<html><body><pre>Data: %s.</pre></body></html>" % json.dumps(data, indent=2)
    return HttpResponse(html)


