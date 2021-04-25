## Setup
```sh
# initial setup
$ npm i -g lerna
$ npm i && npm run clean:build

# install dependency everywhere
$ lerna add <dependency>
$ lerna add --dev <dependency>

# install dependency in scope
$ lerna add <dependency> <scope>/*
$ lerna add --dev <dependency> <scope>/*

# build and deploy
$ npm run build:<dev | prod>
$ npm run deploy:<dev | prod>
```