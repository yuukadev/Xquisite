const Discord = require("discord.js");
const moment = require('moment');
module.exports = {
    name: 'serverinfo',
    aliases: 'sinfo',
    description: 'this command sends info about server',
    category: 'info',
    example: ['!serverinfo', /* Or */ '!sinfo'],
    callback({client, message, args}) {
        let roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.name);
        let members = message.guild.members.cache;
        let channels = message.guild.channels.cache;
        let embed = new Discord.MessageEmbed()
        .setTitle(`Server Information - ${message.guild.name}`)
        .setThumbnail(message.guild.iconURL())
        .setColor('#FF00A6')
        .addField("📂 General Information", [
            `• **Name**: ${message.guild.name}`,
            `• **Server ID**: ${message.guild.id}`,
            `• **Owner**: <@${message.guild.ownerID}>`,
            `• **Server Created**: ${message.guild.createdAt}`, 
        ])
        .addField('📂 Member Information',[
            `• **Users**: ${message.guild.memberCount}`,
            `• **Bots**: ${members.filter(m => m.user.bot).size}`,
        ])

        .addField('📂 Channel Information', [
            `• **Channels**: ${message.guild.channels.cache.size}`,
            `• **Text Channels**: ${channels.filter(ch => ch.type === "text").size}`,
            `• **Voice Channels**: ${channels.filter(ch => ch.type === "voice").size}`,
        ])

        .addField('📂 Role Information', [
            `${roles}`
        ])
        message.channel.send(embed)
    }
}