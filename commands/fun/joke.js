const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "joke",
  description: "This command sends you random joke",
  category: "fun",
  example: ["!joke"],
  callback: async ({ message }) => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    const random = await res.json();

    let embed = new Discord.MessageEmbed()
      .setTitle(random.setup || "There was an error contact the support")
      .setColor("#FF00A6")
      .setDescription(random.delivery || "Error");
    message.reply(embed);
  },
};
