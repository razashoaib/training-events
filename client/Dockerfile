FROM node:lts-slim
WORKDIR /var/lib/client
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]