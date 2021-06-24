const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: "This command mute someone",
    category: 'moderation',
    example: ['!mute @member @reason'],
    callback:({message, args, client}) => {
        let permission = message.member.hasPermission("MANAGE_ROLES");
        let member = message.mentions.members.first();

        let reason = args.slice(1).join(" ");
        let mutedRole = message.guild.roles.cache.find(role => role.name === 'muted');

        if(!permission) {
            return message.channel.send(`❌ | You don't have permission to use this command`);
        } 
        
        if(!args[0]) {
            return message.channel.send(`❌ | Please specify someone`);
        }

        if(!member) {
            return message.channel.send(`❌ | Cannot find a member`);
        }

        if(member.id === client.user.id){
            return message.channel.send(`nooo why do you want to mute me :(`)
        }

        if(message.member.roles.highest.position < member.roles.highest.position){
            return message.channel.send(`❌ | You cannot mute user who have higher role than you...`)
        }

        if(message.member.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position){
            return message.channel.send(`❌ | I can't do that command because they are higher than or equal to my highest role.`);
        }

        if(!member) {
            return message.channel.send(`❌ | User not found`);
        }

        if(member.id === message.author.id) {
            return message.channel.send(`❌ | You cannot mute yourself`);
        };

        if(!mutedRole) {
            return message.channel.send(`❌ | Cannot find the muted role`);
        };

        if(member.roles.cache.has(mutedRole.id)) {
            return message.channel.send(`❌ | User ${member} is already muted`);
        }
        
        if(reason === "") {
            reason = "Unspecified"
        };

        member.roles.add(mutedRole);
        message.channel.send(`:mute: | User ${member} has been muted for the following reason: ${reason}`)
    }
}