from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def wall_feed(request):
    return HttpResponse('<h2>Wall feed</h2>')