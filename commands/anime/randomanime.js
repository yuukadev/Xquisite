const Discord = require("discord.js");

module.exports = {
  name: "randomanime",
  aliases: "ranime",
  description: "this command sends a random image of anime",
  category: "anime",
  example: ["x!randomanime", /* Or */ "x!ranime"],
  callback: async ({ message }) => {
    try {
      const randomanime = require("random-anime");
      const anime = randomanime.anime();
      let member = message.author;

      const embed = new Discord.MessageEmbed()
        .setTitle(`Image for ${member.username}`)
        .setImage(anime)
        .setColor("#FF00A6");

      await message.channel.send({ embeds: [embed] });
    } catch (err) {
      await message.reply("there was something wrong :(");
    }
  },
};
