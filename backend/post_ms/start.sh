docker-compose build

docker-compose up -d db

docker-compose run --rm app rake db:drop db:create db:migrate db:seed

docker-compose up -d
