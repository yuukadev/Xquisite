const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    callback({client, message}) {
        let member = message.mentions.users.first();
        const images = [
            "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
            "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
            "https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif",
            "https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif",
            "https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif"
        ]
        const randomImage = images[Math.floor(Math.random() * images.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`You hugged ${member.username} :heart:`)
            .setImage(randomImage)
            .setTimestamp()
            message.channel.send(embed);
        } else {
            message.reply('Please specify someone');
        }
    }
}