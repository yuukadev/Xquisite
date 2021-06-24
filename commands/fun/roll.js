const Discord = require('discord.js');

module.exports = {
    name: 'roll',
    description: 'This command roll a dice',
    category: 'fun',
    example: ['!roll'],
    callback({message}) {
        const choice = [1,2,3,4,5,6]; // Array of choices
        const randomChoice = choice[Math.floor(Math.random() * choice.length)];
        let embed = new Discord.MessageEmbed()
        .setColor('#FF00A6')
        .setDescription(`:game_die: You got ${randomChoice}!`);
        message.channel.send(embed);
    }
}