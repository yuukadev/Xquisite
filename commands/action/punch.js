const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    callback({client, message}) {
        let member = message.mentions.users.first();
        const images = [
            "https://media.giphy.com/media/3ohc1292yKn6Z1saGs/giphy.gif",
            "https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif",
            "https://media.giphy.com/media/11HeubLHnQJSAU/giphy.gif",
            "https://media.giphy.com/media/wcIT7dQ5yWbDO/giphy.gif",
            "https://media.giphy.com/media/ahMaehFrEx2BG/giphy.gif"
        ]
        const randomImage = images[Math.floor(Math.random() * images.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`You punched ${member.username} :rage:`)
            .setImage(randomImage)
            .setTimestamp()
            message.channel.send(embed);
        } else {
            message.reply('Please specify someone');
        }
    }
}