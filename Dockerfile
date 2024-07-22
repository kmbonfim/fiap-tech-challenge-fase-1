FROM node:18-slim

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY . .

RUN npm install

EXPOSE 80

CMD ["node", "app.js"]