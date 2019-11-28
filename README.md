# Sawpi-app


## Getting Started (Without docker)

### Prerequisites

Installing node10.x, npm and angular7

run `curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`

run `sudo apt install -y nodejs`

run `sudo apt install npm -y`

run `npm install -g @angular/cli@7.3.7`

### Installing dependence

run `npm install` at project root.

### Running app

run `npm start` at project root. Acces app -> http://localhost:4200


## Getting Started (With docker)

### Prerequisites

Installing docker (debian 9)

run `curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -`

run `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian stretch stable"`

run `sudo apt update`

run `apt-cache policy docker-ce`

run `sudo apt install docker-ce -y`

For run Docker commands without sudo

run `sudo usermod -aG docker {USER}`

run `sudo service docker restart`


### Running app

run `docker build -t swapi-app .` at project root for build image

run `docker run -d -p {PORT}:4200 swapi-app` Acces app -> http://localhost:{PORT}





## Authors

* **Lenoir Romain**


