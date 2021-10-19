require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION']
})

// Emojis 
/*
✔️
❌
🎵
🔁
▶️
⏹️
*/

// Command Handler && Welcome Command
const CommandHandler = require("wokcommands");
//const welcome = require('./commands/others/welcome'); --- Remove the comments if you want welcome command to work

client.once('ready', () => {
    console.log('Bot je uključen');
    client.user.setActivity('x!help | x!info');

    //welcome(client); --- This is for welcome command

    new CommandHandler(client, {
        commandsDir: 'commands',
        showWarns: false,
        disabledDefaultCommands: [
            'command',
            'help',
            'language',
            'requiredrole'
        ]
    })
       
    .setDefaultPrefix('x!')
})

client.login(process.env.BOT_TOKEN);
