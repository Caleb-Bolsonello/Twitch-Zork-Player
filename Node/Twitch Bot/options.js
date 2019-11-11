/*
File: options.js
Project: Game_Master_Bot
Programmer: Caleb Bolsonello
First Version: 2019-05-01
Description: This file holds all of the bot options.
*/

const tmi = require('tmi.js');

const pass = 'oauth:';

const options = 
{
    options: 
    {
        debug: true,
    },
    connection:
    {
        cluster: 'aws',
        reconnect: true,
    },
    identity: 
    {
        username: 'BOT_NAME',
        password: pass,
    },
    channels: ['YOUR CHANNEL'],
};

module.exports = options;
