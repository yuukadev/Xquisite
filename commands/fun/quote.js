const Discord = require('discord.js');

module.exports = {
    name: 'quote',
    description: "This command sends you random quote",
    category: 'fun',
    example: ['!quote'],
    callback({message}) {
        const member = message.author;
        const quotes = require('../base/quotes.json');

        const object = Object.keys(quotes)
        const randomQuote = Math.floor(Math.random() * object.length)
        
        const quote = quotes[randomQuote]

        const embed = new Discord.MessageEmbed()
        .setAuthor(`📜 Quote for ${member.username}`)
        .setColor('#FF00A6')
        .setDescription(`${quote}`)
        message.channel.send(embed);
    }
}