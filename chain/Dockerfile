FROM node:18-alpine

COPY hardhat.config.ts /app/hardhat.config.ts
COPY package.json /app/package.json

WORKDIR /app

RUN npm install

ENTRYPOINT ["npx", "hardhat", "node", "--hostname", "0.0.0.0"]