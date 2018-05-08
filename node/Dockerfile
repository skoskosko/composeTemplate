FROM node:latest
ARG FOLDER

# RUN apt-get update -qq && apt-get install -y build-essential libpq-dev libkrb5-dev
RUN mkdir /myapp
WORKDIR /myapp
ADD ./$FOLDER /myapp
RUN npm install
CMD ["node", "app.js"]
