const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "advice",
  description: "This command sends you random advice",
  category: "fun",
  example: ["x!advice"],
  callback: async ({ message }) => {
    try {
      let res = await fetch("https://api.adviceslip.com/advice");
      let random = await res.json();

      const embed = new Discord.MessageEmbed()
        .setAuthor(`Here's some advice for - ${message.author.username} 💖`)
        .setColor("#FF00A6")
        .setDescription(random.slip.advice);

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send("there is something wrong :(");
    }
  },
};
