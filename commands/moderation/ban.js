module.exports = {
  name: 'ban',
  description: "this command ban someone",
  category: 'moderation',
  example: ['!ban @member'],
  minArgs: 1,
  requiredPermissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
  syntaxError: 'Please specify someone',
  callback: ({message}) => {
    const member = message.mentions.members.first();
      if(!member.bannable){
          return message.channel.send(`❌ | ${member} You cannot use that command`)
      } if(member.ban){
          return member.ban() + message.channel.send(`User ${member} has been banned`)
    }
  }
}