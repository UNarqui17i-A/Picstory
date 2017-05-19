FROM node:6.10.3-alpine

RUN npm install -g @angular/cli@1.0.0
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY ./picstory/ /usr/src/app

RUN rm -rf node_modules
RUN npm install

EXPOSE 8020

CMD ["npm", "start"]