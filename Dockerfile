FROM node:alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN  yarn cache clean
RUN yarn

COPY . .

RUN yarn build

EXPOSE 3333

RUN apk add --no-cache bash

CMD ["yarn", "start"]
