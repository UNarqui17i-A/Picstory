# README

To have this correctly running execute:

* docker-compose build

* docker-compose up -d db

* docker-compose run --rm app rake db:create db:migrate db:seed

* docker-compose up

It will be running at localhost:8010

exposed routes are CRUD of:

* /posts
e.g.
GET /posts/ :: can filter by user_id
GET /posts/1  :: 1 = post_id
POST /posts
PATCH/PUT /posts/1
DELETE /posts/1

* /scores

* /comments
