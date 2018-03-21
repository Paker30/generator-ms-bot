'use strict';

const Restify = require('restify');
const Builder = require('botbuilder');
const { BotConnector } = require('./env');

// Setup Restify Server
const Server = Restify.createServer();
const Connector = new Builder.ChatConnector(BotConnector);

// Listen for messages from users 
Server.post('/api/messages', Connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
const Bot = new Builder.UniversalBot(Connector, (session) => {
    session.send("You said: %s", session.message.text);
});

module.exports = Server;
