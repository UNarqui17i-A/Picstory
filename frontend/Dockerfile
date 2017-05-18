FROM kkarczmarczyk/node-yarn
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./picstory/package.json /usr/src/app
RUN yarn
COPY ./picstory/ /usr/src/app
EXPOSE 8020
CMD ["npm", "start"]
