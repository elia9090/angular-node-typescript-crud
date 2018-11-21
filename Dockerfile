#################################################################
#	Dockerfile to build angular app container images			#
#################################################################
FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 4200
CMD ng serve --host 0.0.0.0