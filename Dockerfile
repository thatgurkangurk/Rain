FROM node:17

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .
ENV DISCORD_TOKEN, MONGO_PASSWORD

CMD [ "yarn", "start" ]
