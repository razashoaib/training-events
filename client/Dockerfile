FROM node:lts-slim
WORKDIR /var/lib/client
COPY package.json .
COPY package-lock.json .
RUN yarn install --network-timeout 1000000
COPY . .
EXPOSE 3000
CMD ["yarn", "run", "test-start"]