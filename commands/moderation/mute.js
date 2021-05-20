module.exports = {
    minArgs: 1,
    syntaxError: "Please specify someone",
    category: 'moderation',
    description: 'mute command',
    callback:({client, message, args}) => {
        let member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        let mutedRole = message.guild.roles.cache.find(role => role.name === 'muted');
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(`You don't have permission to use this command`);
        };
        if(member.id === message.author.id) {
            return message.channel.send(`You cannot mute yourself`);
        };
        if(!mutedRole) {
            return message.channel.send('Cannot find the muted role');
        };
        if(reason === "") {
            reason = "Unspecified"
        };
        member.roles.add(mutedRole);
        
        message.channel.send(`User ${member} has been muted for the following reason: ${reason}`)
    }
}

