FROM node:13-alpine
ENV NODE_VERSION 13.8.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose publc port and run npm command
EXPOSE 3000
CMD ["npm", "start"]
