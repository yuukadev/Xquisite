const Discord = require("discord.js");

module.exports = {
  name: "ban",
  description: "This command ban's someone",
  category: "moderation",
  example: ["!ban @member"],
  callback: async ({ message, args }) => {
    try {
      const member = message.mentions.members.first();
      const permission = message.member.permissions.has(
        Discord.Permissions.FLAGS.BAN_MEMBERS
      );

      if (!permission)
        return message.reply({
          content: "❌ | You don't have permission to use this command",
        });

      if (!args[0])
        return message.reply({ content: `❌ | Please specify someone` });

      if (!member)
        return message.reply({ content: `💤 | Cannot find that member...` });

      if (member.id === message.author.id)
        return message.reply({ content: `❌ | You cannot ban yourself!` });

      if (message.member.roles.highest.position < member.roles.highest.position)
        return message.reply({
          content: `❌ | You cannot ban user who have higher role than you...`,
        });

      if (!member.bannable)
        return message.reply({ content: `❌ | I cannot ban that member` });

      return (
        (await member.ban()) +
        message
          .reply({
            content: `:anger: | User ${member} has been banned`,
          })
          .then((msg) => {
            setTimeout(() => msg.delete(), 5000);
          })
      );
    } catch (err) {
      message.reply({ content: `awww there was an ${err}` });
    }
  },
};
