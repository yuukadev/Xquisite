module.exports = {
  name: 'ban',
  description: "This command ban's someone",
  category: 'moderation',
  example: ['!ban @member'],
  callback: ({message, args, client}) => {
    const permission = message.member.hasPermission("BAN_MEMBERS");
    const member = message.mentions.members.first();

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
      return message.channel.send(`you seriously want to ban me ;(`)
    }

    if(message.member.roles.highest.position < member.roles.highest.position){
      return message.channel.send(`❌ | You cannot ban user who have higher role than you...`)
    }

    if(message.member.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position){
      return message.channel.send(`❌ | I can't do that command because they are higher than or equal to my highest role.`);
    }

    if (member.id === message.author.id){
      return message.channel.send(`❌ | You cannot ban yourself`);
    };

    if(!member.bannable){
        return message.channel.send(`❌ | You cannot use that command`)
    } 
    
    if(member.ban){
        return member.ban() + message.channel.send(`:anger: | User ${member} has been banned`)
    }
  }
}