const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  description: "This command sends you random memes",
  category: "fun",
  example: ["x!meme"],
  callback: async ({ message }) => {
    try {
      const url = await fetch("https://www.reddit.com/r/memes/random/.json");
      const random = await url.json();

      const embed = new MessageEmbed()
        .setTitle(random[0].data.children[0].data.title)
        .setImage(random[0].data.children[0].data.url)
        .setColor("#FF00A6")
        .setFooter(
          `👍 ${random[0].data.children[0].data.ups} 👎 ${random[0].data.children[0].data.downs} | Comments : ${random[0].data.children[0].data.num_comments}`
        );

      await message.channel.send({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
