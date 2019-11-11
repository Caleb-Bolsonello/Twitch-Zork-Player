/*
File: formatMessage.js
Project: Game_Master_Bot
Programmer: Caleb Bolsonello
First Version: 2019-05-01
Description: This is the FormatMSG class which formats the message by removing the '>' character and whitespace before the message. The class also tests if it is valid.
*/

class FormatMSG
{
    constructor() 
    {
        console.log('FormatMSG class active.');
    }

    removeBufferChar(message)
    {
        //Remove > character
        message = message.slice(1);

        //Remove any whitespace before actual message
        while(message[0] == ' ')
        {
            message = message.slice(1);
        }

        return message;
    }

    isValid(message)
    {
        var valid = false;

        //Check that message has no special characters
        if(!message.match(/[^a-zA-Z0-9 ]/g))
        {
            //Make sure user doesn't Save or restore Zork.
            if((message.toUpperCase() != "SAVE") && (message.toUpperCase() != "RESTORE") && (message.toUpperCase() != "QUIT"))
            {
                valid = true
            }
        }

        return valid;
    }
};

module.exports = FormatMSG;