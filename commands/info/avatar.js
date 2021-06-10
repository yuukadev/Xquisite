const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: "this command sends avatar of someone's discord picture",
    category: 'info',
    example: ['!avatar @member'],
    callback({message}) {
        let member = message.mentions.users.first() || message.author
        let avatar = member.displayAvatarURL({dynamic: true, size: 1024}) // Avatar options

        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor('#FF00A6')
        message.channel.send(embed);
    }
}