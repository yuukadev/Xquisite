const Discord = require('discord.js')

module.exports = {
    name: 'removerole',
    description: "this command removerole",
    category: 'moderation',
    example: ['!removerole @member @role'],
    syntaxError: 'Please specify someone',
    callback({message}) {
        const member = message.mentions.members.first()

        if(!member) {
            return message.channel.send(`❌ | Please specify someone`); // Message when no one is specified
        }
        
        let role = message.mentions.roles.first()

        if(!role) {
            return message.channel.send(`❌ | There is no role with that name `); // Message when there is no role
        }

        if(role) {
            member.roles.remove(role);
            message.channel.send(`Role ${role} has been removed from ${member}`); // Message when role is removed
        }
    
    }
}