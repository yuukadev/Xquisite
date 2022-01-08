module.exports = {
  name: "unmute",
  description: "This command unmute command",
  category: "moderation",
  permission: ["MANAGE_ROLES"],
  example: ["x!unmute @member"],
  callback: ({ client, message, args }) => {
    let member = message.mentions.members.first();
    let mutedRole = message.guild.roles.cache.find(
      (role) => role.name === "muted"
    );
    let permission = message.member.hasPermission("MANAGE_ROLES");

    if (!permission) {
      return message.channel.send(
        "❌ | You are not allowed to use this command"
      );
    }

    if (!args[0]) {
      return message.channel.send(`❌ | Please specify someone`);
    }

    if (!member) {
      return message.channel.send(`❌ | Cannot find a member`);
    }

    if (member.id === client.user.id) {
      return message.channel.send(`huuh? who told you i was muted`);
    }

    if (message.member.roles.highest.position < member.roles.highest.position) {
      return message.channel.send(
        `❌ | You cannot unmute user who have higher role than you`
      );
    }

    if (!member.roles.cache.has(mutedRole.id)) {
      return message.channel.send(`❌ | User ${member} isn't muted`);
    }

    member.roles.remove(mutedRole);
    message.channel.send(`💬 | User ${member} has been unmuted`);
  },
};
