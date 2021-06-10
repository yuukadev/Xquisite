module.exports = {
  name: 'kick',
  description: "this command kick someone",
  category: 'moderation',
  example: ['!kick @member'],
  minArgs: 1,
  requiredPermissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
  syntaxError: "Please specify someone",
  callback: ({message}) => {
    let member = message.mentions.members.first();
      if(!member.kickable){
          return message.channel.send(`❌ | ${member} You cannot use that command`) // Message for missing permission
      } if(member.kick){
          return member.kick() + message.channel.send(`User ${member} has been kicked`) // Message when user is kicked
      } 
    }
  }