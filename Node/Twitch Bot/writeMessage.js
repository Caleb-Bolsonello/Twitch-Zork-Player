/*
File: writeMessage.js
Project: Game_Master_Bot
Programmer: Caleb Bolsonello
First Version: 2019-05-01
Description: This is the WriteMessage class which formats the message by removing the '>' character and whitespace before the message. The class also tests if it is valid.
*/

var exec = require('child_process').execFile;

const admin = require('firebase-admin');
var serviceAccount = require("./node-typer-firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-typer.firebaseio.com"
});

const db = admin.firestore();

const sleep = (milliseconds) => 
{
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class WriteMessage
{
    constructor() 
    {
        console.log('FormatMSG class active.');

        this.writingMessage = false;
    }
	
	writeMsg(message)
    {
		let addDoc = db.collection('UserMsg').add({
			Message: message
		}).then(ref => {
			console.log('Added document with ID: ', ref.id);
		});
	}

    //writeMsg(message)
    //{
    //    this.writingMessage = true;

    //    exec('node ' + 'D:\\Node Typer\\index.js', [message], function(err, data) 
    //    {
    //        if(err) 
    //        {
    //            console.log(err);
    //        } 
    //        else
    //        {
    //            console.log(data.toString());
    //        }                       
    //    }); 

    //    sleep(1000);

    //    this.writingMessage = false;
    //}
};

module.exports = WriteMessage;
