FROM node:20-alpine

RUN apk update && \
    apk add --no-cache openssl

WORKDIR /usr/src/myfish

COPY package.json /usr/src/myfish/package.json
# COPY prisma ./prisma/ 
RUN npm install
COPY . /usr/src/myfish
RUN npx prisma generate