module.exports = {
    name: 'unmute',
    description: "this command unmute someone if they are muted",
    category: 'moderation',
    example: ['!unmute @member'],
    minArgs: 1,
    syntaxError: "Please specify someone",
    callback:({client, message, args}) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("❌ | You are not allowed to use this command");
        }
        let member = message.mentions.members.first();
        let mutedRole = message.guild.roles.cache.find(role => role.name === 'muted');
        if(!member.roles.cache.has(mutedRole.id)) {
            return message.channel.send(`User ${member} isn't muted`);
        }
        member.roles.remove(mutedRole);
        message.channel.send(`User ${member} has been unmuted`);
    }
}