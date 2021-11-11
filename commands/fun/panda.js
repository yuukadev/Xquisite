const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "panda",
  description: "This command sends you random panda image",
  category: "fun",
  example: ["!panda"],
  callback: async ({ message }) => {
    let member = message.author;
    const res = await fetch("https://some-random-api.ml/img/panda");
    const random = await res.json();

    let replies = [
      "here's some picture for",
      "awwww look at that",
      "thats cute!",
    ];

    const randomReplies = replies[Math.floor(Math.random() * replies.length)];

    let embed = new Discord.MessageEmbed()
      .setTitle(`${randomReplies} ${member.username} 🥺`)
      .setColor("#FF00A6")
      .setImage(random.link);
    message.reply(embed);
  },
};
