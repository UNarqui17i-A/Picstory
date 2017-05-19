docker-compose build

#docker-compose up -d db
#docker-compose run --rm app-1 rake db:drop db:create db:migrate db:seed

#docker-compose up -d db-slave
docker-compose run --rm app-1 rake RAILS_ENV=development db:drop db:create db:migrate db:seed DISABLE_DATABASE_ENVIRONMENT_CHECK=1

docker-compose up
