FROM node:16
WORKDIR /app
COPY package.json .
RUN npm i && npm i  -g nodemon
COPY . ./
EXPOSE 3000
CMD ["npm","run","chalu"]
