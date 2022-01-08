const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "quote",
  description: "This command sends you random quote",
  category: "fun",
  example: ["x!quote"],
  callback: async ({ message }) => {
    try {
      let res = await fetch("https://api.quotable.io/random");
      let random = await res.json();

      const embed = new Discord.MessageEmbed()
        .setAuthor(`📜 Author - ${random.author}`)
        .setColor("#FF00A6")
        .setDescription(random.content);

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send("there is something wrong :(");
    }
  },
};
