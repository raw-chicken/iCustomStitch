FROM node:18-slim

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . . 

# CMD dir
CMD [ "node", "src/server.js" ]