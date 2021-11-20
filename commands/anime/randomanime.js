const Discord = require("discord.js");

module.exports = {
  name: "randomanime",
  aliases: "ranime",
  description: "this command sends a random image of anime",
  category: "anime",
  example: ["!randomanime", /* Or */ "!ranime"],
  callback({ message }) {
    const randomanime = require("random-anime");
    const anime = randomanime.anime();
    let member = message.author;

    const embed = new Discord.MessageEmbed()
      .setTitle(`Image for ${member.username}`)
      .setImage(anime)
      .setColor("#FF00A6");

    message.channel.send(embed);
  },
};
