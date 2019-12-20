FROM node:11.12.0-alpine

WORKDIR /app
COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm ci

CMD npm run dev
