FROM node:18-alpine

WORKDIR /app

EXPOSE 5173

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "run", "dev" ]