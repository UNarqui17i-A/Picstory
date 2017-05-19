################################
# Dockerfile for UserMS
################################

FROM beevelop/nodejs:6

MAINTAINER Edward Carrillo <eccarrilloe@gmail.com>

RUN \
  apt-get update && \
  apt-get install -y python python-dev python-pip && \
  rm -rf /var/lib/apt/lists/*

RUN npm install -g sails

RUN mkdir /app
COPY . /app

WORKDIR /app
RUN npm install

EXPOSE 8005

CMD ["sails", "lift", "--prod"]
