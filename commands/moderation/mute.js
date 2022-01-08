const Discord = require("discord.js");

module.exports = {
  name: "mute",
  description: "This command mute someone",
  category: "moderation",
  permission: ["MANAGE_ROLES"],
  example: ["x!mute @member @reason"],
  callback: ({ message, args, client }) => {
    let member = message.mentions.members.first();

    let reason = args.slice(1).join(" ");
    let mutedRole = message.guild.roles.cache.find(
      (role) => role.name === "muted"
    );

    if (!args[0]) {
      message.reply(`❌ | Please specify someone`);
    } else if (!member) {
      message.reply("❌ | Cannot find a member");
    }

    if (message.member.roles.highest.position < member.roles.highest.position) {
      return message.channel.send(
        `❌ | You cannot mute user who have higher role than you...`
      );
    }

    if (
      message.member.roles.highest.position >
      message.guild.members.resolve(client.user).roles.highest.position
    ) {
      return message.channel.send(
        `❌ | I can't do that command because they are higher than or equal to my highest role.`
      );
    }

    if (member === message.member) {
      message.channel.send({ content: `❌ | You cannot mute yourself` });
    }

    if (!mutedRole) {
      message.channel.send({ content: `❌ | Cannot find the muted role` });
    }

    if (member.roles.cache.has(mutedRole.id)) {
      message.channel.send({ content: `❌ | User ${member} is already muted` });
    }

    if (reason === "") {
      reason = "Unspecified";
    }

    member.roles.add(mutedRole);
    message.channel.send({
      content: `:mute: | User ${member} has been muted for the following reason: ${reason}`,
    });
  },
};
