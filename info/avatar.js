const Discord = require('discord.js');
module.exports = {
    callback({message}) {
        let member = message.mentions.users.first() || message.author
        let avatar = member.displayAvatarURL({dynamic: true, size: 1024})

        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor('#FF00A6')
        message.channel.send(embed);
    }
}