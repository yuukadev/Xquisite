const Discord = require('discord.js')

module.exports = {
    name: 'addrole',
    aliases: 'giverole',
    description: "This command add role for someone",
    category: 'moderation',
    example: ['!addrole @member @role'],
    callback({message, client, args}) {
        const permission = message.member.hasPermission("MANAGE_ROLES");
        const member = message.mentions.members.first()

        if(!permission) {
            return message.channel.send(`❌ | You don't have permission to use this command`)
        }

        if(!args[0]) {
            return message.channel.send(`❌ | Please specify someone`);
        }

        if(!member) {
            return message.channel.send(`❌ | Cannot find a member`);
        }

        if(message.member.roles.highest.position < member.roles.highest.position){
            return message.channel.send(`❌ | You cannot give role to user who have higher role than you...`)
        }

        if(message.member.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position){
            return message.channel.send(`❌ | The roles cannot be added because they are higher than or equal to my highest role.`);
        }

        let role = message.mentions.roles.first()
        
        if(!role) {
            return message.channel.send(`💤 | There is no role with that name...`);
        }

        if(member.roles.cache.has(role.id)) {
            return message.channel.send(`❌ | That person already have that role`);
        }

        member.roles.add(role);
        message.channel.send(`✅ | Role ${role} has been added to ${member}`);    
    }
}