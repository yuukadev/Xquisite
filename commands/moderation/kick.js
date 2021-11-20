module.exports = {
  name: "kick",
  description: "This command kick's someone",
  category: "moderation",
  example: ["!kick @member"],
  callback: ({ message, args, client }) => {
    const permission = message.member.hasPermission("KICK_MEMBERS");
    const member = message.mentions.members.first();

    if (!permission) {
      return message.channel.send(
        `❌ | You don't have permission to use this command`
      );
    }

    if (!args[0]) {
      return message.channel.send(`❌ | Please specify someone`);
    }

    if (!member) {
      return message.channel.send(`❌ | Cannot find a member`);
    }

    if (member.id === client.user.id) {
      return message.channel.send(`but i didn't do anything to you!`);
    }

    if (message.member.roles.highest.position < member.roles.highest.position) {
      return message.channel.send(
        `❌ | You cannot kick user who have higher role than you...`
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

    if (member.id === message.author.id) {
      return message.channel.send(`❌ | You cannot kick yourself`);
    }

    if (!member.kickable) {
      return message.channel.send(`❌ | You cannot use that command`);
    }
    if (member.kick) {
      return (
        member.kick() +
        message.channel.send(`:anger: | User ${member} has been kicked`)
      );
    }
  },
};
