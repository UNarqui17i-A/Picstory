FROM node
ADD package.json /src/package.json
RUN npm install
EXPOSE 8005
COPY . /src
CMD ["node", "/src/app.js"]
