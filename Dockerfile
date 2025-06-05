FROM node:20-alpine

RUN apk update && \
    apk add --no-cache openssl

WORKDIR /usr/src/mymail

COPY package.json /usr/src/mymail/package.json
# COPY prisma ./prisma/ 
RUN npm install
COPY . /usr/src/mymail
RUN npx prisma generate