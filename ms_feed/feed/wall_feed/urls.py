from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.wall_feed),
    url(r'^posts/trending$', views.trending)
]