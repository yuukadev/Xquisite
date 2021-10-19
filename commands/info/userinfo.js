const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'userinfo',
    description: 'This command sends info about user',
    category: 'info',
    example: ['!userinfo'],
    callback({message}) {
        const user = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(user.id);

        let embed = new Discord.MessageEmbed()
        .setTitle(`User Information - ${user.username}`)
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setColor('#FF00A6')
        .addField(":busts_in_silhouette: Informations", [
            `• **Name**: ${user.tag}`,
            `• **User ID**: ${user.id}`,
            `• **Nickname**: ${member.nickname || 'None'}`,
            `• **Is Bot**: ${user.bot ? 'True' : 'False'}`,
            `• **Created At**: ${moment(member.user.createdTimestamp).format('LL LTS')}`,
            `• **Joined At**: ${moment(member.joinedAt).format('LL LTS')}`,
        ])
        message.channel.send(embed)
    }
}