const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "serverinfo",
  description: "This command sends info about server",
  category: "info",
  example: ["x!serverinfo"],
  callback({ message }) {
    let roles = message.guild.roles.cache
      .sort((a, b) => b.position - a.position)
      .map((role) => role.name);
    let members = message.guild.members.cache;
    let channels = message.guild.channels.cache;
    let owner = members.find((member) => member.id === message.guild.ownerId);
    let embed = new Discord.MessageEmbed()
      .setTitle(`Server Information - ${message.guild.name}`)
      .setThumbnail(message.guild.iconURL())
      .setColor("#FF00A6")
      .addField(
        "📂 General Information",
        [
          `• **Name**: ${message.guild.name}`,
          `• **Server ID**: ${message.guild.id}`,
          `• **Owner**: ${owner}`,
          `• **Server Created**: ${moment(
            message.guild.createdTimestamp
          ).format("dddd, MMMM Do YYYY")}`,
        ].join("\n")
      )
      .addField(
        "📂 Member Information",
        [
          `• **Users**: ${message.guild.memberCount}`,
          `• **Bots**: ${members.filter((m) => m.user.bot).size}`,
        ].join("\n")
      )

      .addField(
        "📂 Channel Information",
        [
          `• **Channels**: ${message.guild.channels.cache.size}`,
          `• **Text Channels**: ${
            channels.filter((ch) => ch.type === "text").size
          }`,
          `• **Voice Channels**: ${
            channels.filter((ch) => ch.type === "voice").size
          }`,
        ].join("\n")
      )

      .addField("📂 Role Information", [`${roles}`].join("\n"));
    message.channel.send({ embeds: [embed] });
  },
};
