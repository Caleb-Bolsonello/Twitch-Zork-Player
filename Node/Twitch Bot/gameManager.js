/*
File: gameManager.js
Project: Game_Master_Bot
Programmer: Caleb Bolsonello
First Version: 2019-05-01
Description: This is the GameManager class which manages when a game is in session as well as launches the game using frotz.
*/

class GameManager
{
    gameActive;

    constructor() 
    {
        gameActive = false;

        console.log('GameManager class active.');
    }
};

module.exports = GameManager;