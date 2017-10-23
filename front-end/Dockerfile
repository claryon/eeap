FROM node:alpine

# required for specific node modules
#RUN apk add --no-cache make


# add node packages
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

# change work dir
WORKDIR /app


# bundle app source
RUN mkdir -p /app/config \
	&& mkdir -p /app/server \
	&& mkdir -p /app/public

COPY server.js /app/
COPY config/ /app/config
COPY server/ /app/server
COPY public/ /app/public

COPY build_docker_run.sh /build_docker_run.sh

EXPOSE 443


CMD /build_docker_run.sh
