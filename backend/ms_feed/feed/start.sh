#!/bin/bash

#echo Starting Gunicorn.
#exec gunicorn feed.wsgi:application \
#	--bind 0.0.0.0:8000 \
#	--workers 3
docker-compose build
docker-compose up -d
