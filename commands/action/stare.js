const Discord = require("discord.js");
const Math = require("mathjs");

module.exports = {
  name: "stare",
  description: "this command sends a staring gif",
  category: "action",
  example: ["x!stare @member"],
  callback({ message }) {
    let member = message.mentions.users.first();
    const imagesStare = [
      "https://media1.tenor.com/images/e3ed0701f3d0e6a794afd2c035461876/tenor.gif?itemid=9902957",
      "https://media1.tenor.com/images/c35ac80c3e7b9a049cd351e7dc9dd50f/tenor.gif?itemid=13582228",
      "https://media1.tenor.com/images/e2c0c747f4aa477ee1e67c343c0ad188/tenor.gif?itemid=16188897",
      "https://media1.tenor.com/images/92c2837c597229ff6172d482144dc780/tenor.gif?itemid=17563824",
      "https://media1.tenor.com/images/4908729f7fb720d3b1e3655348cb3345/tenor.gif?itemid=15060978",
      "https://media1.tenor.com/images/181e52282ccc9697b033a676ca1f09bb/tenor.gif?itemid=5198773",
      "https://media1.tenor.com/images/f72aa736af89e878c4df30199cfca30e/tenor.gif?itemid=16708578",
      "https://media1.tenor.com/images/0c9f9723bb85f6c22e4cbaee6d87c68e/tenor.gif?itemid=16563939",
      "https://media.giphy.com/media/Xasq0msrdTbWg/giphy.gif",
      "https://media.giphy.com/media/fvcrSYkOmtP8c/giphy.gif",
      "https://media.giphy.com/media/327hvHzALPieg2L12n/giphy.gif",
      "https://media.giphy.com/media/pKvo8d1PSpOOA/giphy.gif",
    ];
    const randomImage =
      imagesStare[Math.floor(Math.random() * imagesStare.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(
          `Looks like ${message.author.username} is staring at ${member.username} 👀`
        )
        .setColor("#FF00A6")
        .setImage(randomImage)
        .setTimestamp();
      message.channel.send({ embeds: [embed] });
    } else {
      message.channel.send("❌ | Please specify someone");
    }
  },
};
