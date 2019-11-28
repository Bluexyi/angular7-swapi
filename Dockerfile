FROM node:10.4

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g @angular/cli@7.3.7
EXPOSE 4200

CMD ng serve --host 0.0.0.0

