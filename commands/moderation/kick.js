module.exports = {
  minArgs: 1,
  requiredPermissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
  syntaxError: "Please specify someone",
  category: 'moderation',
  description: 'kick command',
  callback: ({message}) => {
    let member = message.mentions.members.first();
      if(!member.kickable){
          return message.channel.send(`❌ | ${member} You cannot use that command`)
      } if(member.kick){
          return member.kick() + message.channel.send(`User ${member} has been kicked`)
      } 
    }
  }