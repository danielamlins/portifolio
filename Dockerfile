# pull official base image
FROM node:12.20.0-alpine

# add app
COPY package.json /app/package.json
COPY . /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN npm install --silent
RUN npm rebuild node-sass
RUN npm install -g serve
RUN npm run build


# start app
CMD serve -p $PORT -s build