FROM ubuntu

MAINTAINER william

RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install python build-essential nodejs

ADD src /src
WORKDIR /src
RUN npm install

EXPOSE  8080

CMD ["node", "/src/index.js"]