/*
File: swearing.js
Project: Game_Master_Bot
Programmer: Caleb Bolsonello
First Version: 2019-05-01
Description: This is the Swearing class which checks if the user has inputted profanity.
*/

const axios = require('axios');

const baseQuery = 'https://www.purgomalum.com/service/containsprofanity?text=';

class Swearing
{
    constructor() 
    {
        console.log('Swearing class active.');
    }

    isSwear(usrInput)
    {
        var query = baseQuery + usrInput;

        return axios.get(query)
            .then(function (response)
            {
                console.log(response.data);

                return response.data;
            })
            .catch(function (error)
            {
                console.log(error);
            });
    }
};

module.exports = Swearing;