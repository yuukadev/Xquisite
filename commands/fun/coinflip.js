const Discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'with this command you can play coinflip',
    category: 'fun',
    example: ['!coinflip'],
    callback({message}) {
        const choice = ["Heads", "Tails"];
        const randomChoice = choice[Math.floor(Math.random() * choice.length)];
        let embed = new Discord.MessageEmbed()
        .setColor('#FF00A6')
        .setDescription(`You flipped a ${randomChoice}!`);
        message.channel.send(embed);
    }
}