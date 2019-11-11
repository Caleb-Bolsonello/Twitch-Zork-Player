# Twitch-Zork-Player

This bot is meant to be run on Linux. For an optimal experience, “cool-retro-term” is used to emulate an old school terminal [cool-retro-term]: https://github.com/Swordfish90/cool-retro-term. On top of this, to run Zork, Frotz can be used [Frotz]: https://davidgriffith.gitlab.io/frotz/. 

In order to run this bot, you will need to first hook it up to a firebase database. To set up a firebase database, see the following tutorial: https://firebase.google.com/docs/web/setup. After you have a running firebase database, two files must be edited to hook the scripts up to your firebase database. First, open the ./Python/PyTyper directory and locate the “./node-typer-firebase-admin.json” file. Here is where you should enter your firebase databases config details. The second file can be found in ./Node/Twitch Bot/node-typer-firebase-admin.json. Copy your firebase config details into here as well. 

Next run a terminal. If you’re using “cool-retro-term”, open it. Launch Frotz and load in your Zork.DAT file. Open a second terminal and navigate to the “./Twitch-Zork-Player/Python/PyTyper/” folder. You can run the python script by running the following command: “./typer.py”.

Next the Node.JS script must be run in order for the twitch bot to connect to the Twitch chat. In order for you to connect your bot to the correct chat, create a twitch account for the bot. Next go to the following file and edit it: “./Node/Twitch Bot.options.js”. Set the “pass” variable to your twitch oauth code which can be obtained from here: https://twitchapps.com/tmi/ (Note: make sure to leave the ‘oaith:’ in front of the Oauth token). Next, find the “username” variable and enter the bot’s username. Finally, enter the name of the channel the bot should join in the “channels” array. 

Now the Node.JS bot can be run. Navigate to the “./Node/Twitch Bot/” folder in a new terminal and run: ‘node.’. If the bot joins, you can now enter in a message to the terminal by typing a message with the ‘>’ character in front of it (Example: ‘>Go West’). 

NOTE: You must select the terminal that is running Zork after running all of the above commands. Failing to do this means the bot will be typing input into whatever other window is selected.  This is a quick and dirty solution to entering the user input in. In the future hopefully piping the data directly into the terminal would be a better solution. 

