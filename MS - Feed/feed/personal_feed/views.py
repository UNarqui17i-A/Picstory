from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def personal_feed(request):
    return HttpResponse('<h2>Personal feed</h2>')