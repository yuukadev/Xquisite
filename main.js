require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION']
})

// Command Handler && Welcome Command 
const CommandHandler = require("wokcommands");
const welcome = require('./commands/others/welcome');

client.once('ready', () => {
    console.log('Bot je uključen');
    client.user.setActivity('!help | !info');

    welcome(client);

    new CommandHandler(client, {
        commands: 'commands'
    });
});

// Your Token
client.login(process.env.BOT_TOKEN);


