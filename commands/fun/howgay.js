const Discord = require("discord.js");

module.exports = {
  name: "howgay",
  aliases: "gay",
  description: "This command sends how much you are gay",
  category: "fun",
  example: ["x!howgay"],
  callback({ message, args }) {
    let member = message.mentions.users.first();
    let random = Math.floor(Math.random() * 101);

    if (!args[0]) {
      message.reply("❌ | Please specify someone");
    } else if (!member) {
      message.reply("❌ | Cannot find a member");
    }

    if (member) {
      const embed = new Discord.MessageEmbed()
        .setTitle("Results")
        .setDescription(`${member.username} is ${random}% gay :rainbow:`)
        .setColor("#FF00A6");

      message.channel.send({ embeds: [embed] });
    }
  },
};
