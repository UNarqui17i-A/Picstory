################################
# Dockerfile for UserMS
################################

FROM beevelop/nodejs:6

MAINTAINER Edward Carrillo <eccarrilloe@gmail.com>

RUN \
  apt-get update && \
  apt-get install -y python python-dev python-pip python-virtualenv && \
  rm -rf /var/lib/apt/lists/*

# RUN npm config set proxy http://168.176.239.41:8080

RUN npm install -g sails

RUN mkdir /app
COPY . /app

WORKDIR /app
RUN npm install

EXPOSE 8005

CMD ["sails", "lift", "--prod"]
