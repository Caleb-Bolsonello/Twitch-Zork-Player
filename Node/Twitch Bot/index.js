/*
File: index.js
Project: Game_Master_Bot
Programmer: Caleb Bolsonello
First Version: 2019-05-01
Description: This is the index file for the Game_Master_Bot which handles each of the events the bot must handle.
*/

const tmi = require('tmi.js');
const options = require('./options.js');
const Swearing = require('./swearing.js');
const FormatMSG = require('./formatMessage.js');
const WriteMessage = require('./writeMessage.js');

const client = new tmi.client(options);

client.connect();

const swearFilter = new Swearing();
const format = new FormatMSG();
var messageWriter = new WriteMessage();

client.on('connected', (address, port) => 
{
    client.action('Ought2bTV', 'I, the Game_Master_Bot, have arrived! Let the games commence!');
});

client.on('chat', function (channel, userstate, message, self) 
{
    if (self) return;
    
    if(message[0] == '>')
    {
        message = format.removeBufferChar(message);

        if(format.isValid(message))
        {
            if(messageWriter.writingMessage == false)
            {
                swearFilter.isSwear(message).then(data => 
                {    
                    if(data == true)
                    {
                        client.action('Ought2bTV', 'Swearing has been filtered out so I dont get banned. :|');
                    }
                    else
                    {
                        //client.action('Ought2bTV', 'Message contained no swearing'); //Test input
                        messageWriter.writeMsg(message);
                    }
                });
            }
        }
    }
});
