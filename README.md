# generator-ms-bot
`generator-ms-bot` creates the example nodejs [Microsoft Bot](https://docs.microsoft.com/en-us/azure/bot-service/nodejs/bot-builder-nodejs-quickstart)
[![Build Status](https://travis-ci.org/Paker30/generator-ms-bot.svg?branch=master)](https://travis-ci.org/Paker30/generator-ms-bot)

The bot is ready to work with the Bot Framework Emulator, just start it and talk to it.
It also gives you the option to dockerize your bot.

# Install
>$ npm install -g generator-ms-bot

# Usage
>$ yo ms-bot

This scafolding generates the files in the current directory, so be sure to change to a new directory before execute it.

`generator-ms-bot` creates a module which includes:
* package.json
* README.md
* src
    * env.js
    * index.js
    * start.js
* Dockerfile
* .dockerignore
