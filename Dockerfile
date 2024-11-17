FROM node:23-alpine3.19
WORKDIR /user/src/Marvin
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]
