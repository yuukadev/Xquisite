const Discord = require('discord.js')

module.exports = {
    name: 'addrole',
    description: "this command add role for someone",
    category: 'moderation',
    example: ['!addrole @member @role'],
    callback({message}) {
        const member = message.mentions.members.first()

        if(!member) {
            return message.channel.send(`❌ | Please specify someone`); // If member is not specified
        }
        
        let role = message.mentions.roles.first()

        if(!role) {
            return message.channel.send(`❌ | There is no role with that name `); // If bot can't find that role
        }

        if(role) {
            member.roles.add(role);
            message.channel.send(`Role ${role} has been added to ${member}`); // Message when role is added
        }
    
    }
}