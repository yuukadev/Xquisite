const Discord = require("discord.js");

module.exports = {
  name: "coinflip",
  aliases: "coin",
  description: "This command flip coin for you",
  category: "fun",
  example: ["x!coinflip"],
  callback({ message }) {
    const choice = ["Heads", "Tails"];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    let embed = new Discord.MessageEmbed()
      .setColor("#FF00A6")
      .setDescription(`You flipped a ${randomChoice}!`);
    message.channel.send({ embeds: [embed] });
  },
};
