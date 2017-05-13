FROM ruby:2.3.3

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /post
WORKDIR /post

ADD Gemfile /post/Gemfile
ADD Gemfile.lock /post/Gemfile.lock

RUN bundle install

ADD . /post

RUN rake db:drop db:create db:migrate db:seed
