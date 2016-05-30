FROM node:6
MAINTAINER ukatama <dev.ukatama@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY config /usr/src/app/config
COPY scripts /usr/src/app/scripts
COPY src /usr/src/app/src
COPY views /usr/src/app/views
COPY .babelrc /usr/src/app
COPY .eslintrc.jest.yml /usr/src/app
COPY .eslintrc.yml /usr/src/app
COPY webpack.config.js /usr/src/app
RUN npm run test
RUN npm run build

COPY index.js /usr/src/app

CMD [ "npm", "start" ]
EXPOSE 80
