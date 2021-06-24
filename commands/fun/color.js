const Discord = require('discord.js');

module.exports = {
    name: 'color',
    aliases: 'randomcolor',
    description: "This command sends you random hex color",
    category: 'fun',
    example: ['!color'],
    callback({message}) {
        let member = message.author;
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        const embed = new Discord.MessageEmbed()
        .setTitle(`Color for ${member.username}`)
        .setImage('https://dummyimage.com/1024x1024/' + randomColor)
        .setColor(randomColor)
        .setFooter(`Hex Color - ${randomColor}`)
        message.channel.send(embed);
    }
}