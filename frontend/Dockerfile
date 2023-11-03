FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN corepack enable
RUN pnpm install

COPY . .
RUN pnpm run build