FROM node:8.9.0
MAINTAINER Guilherme Henrique Piasson - @guilhermehpiasson
ENV PORT=3109
ENV NODE_ENV=production
ARG password
RUN git clone https://github.com/guilhermehpiasson/cpsday2018-workshop.git
WORKDIR /cpsday2018-workshop
RUN npm install
RUN npm run build
EXPOSE $PORT
CMD npm start
