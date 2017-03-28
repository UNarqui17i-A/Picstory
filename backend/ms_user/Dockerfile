FROM node
ADD package.json /src/package.json
WORKDIR /src/
RUN npm install -g sails
RUN npm install
EXPOSE 8005
COPY . /src
CMD ["node", "/src/app.js"]
