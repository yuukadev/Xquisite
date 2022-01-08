const Discord = require("discord.js");

module.exports = {
  name: "addrole",
  aliases: "giverole",
  description: "This command add role for someone",
  category: "moderation",
  example: ["x!addrole @member @role"],
  callback({ message, client, args }) {
    const permission = message.member.permissions.has("MANAGE_ROLES");
    const member = message.mentions.members.first();

    if (!permission)
      return message.channel.send({
        content: `❌ | You don't have permission to use this command`,
      });

    if (!args[0])
      return message.channel.send({ content: `❌ | Please specify someone` });

    if (!member)
      return message.channel.send({ content: `❌ | Cannot find a member` });

    /*
        if(message.member.roles.highest.position < member.roles.highest.position){
            return message.channel.send(`❌ | You cannot give role to user who have higher role than you...`)
        }
*/
    let role = message.mentions.roles.first();

    if (!role)
      return message.channel.send({
        content: `💤 | There is no role with that name...`,
      });

    if (member.roles.cache.has(role.id))
      return message.channel.send({
        content: `❌ | That person already have that role`,
      });

    member.roles.add(role);
    message.channel.send({
      content: `✅ | Role ${role} has been added to ${member}`,
    });
  },
};
