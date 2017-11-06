FROM node:alpine

# required for specific node modules
RUN apk add --no-cache git

# add node packages
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

# change work dir
WORKDIR /app

# bundle app source
RUN mkdir -p /app/config \
	&& mkdir -p /app/contract
	
COPY th.js /app/
COPY report.js /app/
COPY db_connect.js /app/
COPY config/ /app/config
COPY contract/ /app/contract


COPY build_docker_run.sh /build_docker_run.sh


CMD /build_docker_run.sh