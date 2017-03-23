from django.shortcuts import render
from django.http import HttpResponse
from urllib.request import urlopen
import json
import requests
# Create your views here.


def personal_feed(request, username=None):
    end_point_docker = 'http://192.168.99.101:8010/posts?user_id='
    url = end_point_docker + username;
    data = requests.get(url)
    return HttpResponse(data)


