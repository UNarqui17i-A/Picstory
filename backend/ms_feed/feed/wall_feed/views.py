from django.shortcuts import render
from django.http import HttpResponse
import requests
# Create your views here.

def wall_feed(request):
	endpoint_docker = 'http://192.168.99.101:8010/posts'
	data = requests.get(endpoint_docker)
	return HttpResponse(data)

def trending(requests):
	endpoint_docker = 'http://192.168.99.101:8010/posts'
	data = requests.get(endpoint_docker)
	scores = {}
	for post in data:
		score = post['scores']
		aux_score = 0
		for i in score:
			aux_score+=i['scored']
		score[post] = aux_score

	output = [x for x in data if scores[x] > 4.2]

	return HttpResponse(output)