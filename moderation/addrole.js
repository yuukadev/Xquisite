const Discord = require('discord.js')

module.exports = {
    callback({message}) {
        let role = message.guild.roles.cache.get('841358622091902986');
        const member = message.mentions.members.first()

    
        member.roles.add(role)
        message.channel.send(`Role ${role} has been added to ${member}`);
    }
}