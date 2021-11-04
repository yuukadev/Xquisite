const Discord = require("discord.js");
const Math = require("mathjs");

module.exports = {
  name: "angry",
  description: "this command sends a gif of anger",
  category: "action",
  example: ["!angry @member"],
  callback({ message }) {
    let member = message.mentions.users.first();
    const imagesAngry = [
      "https://media.giphy.com/media/9w9Z2ZOxcbs1a/giphy.gif",
      "https://media.giphy.com/media/nnIfvLqA2SbuGr3VAL/giphy.gif",
      "https://media.giphy.com/media/U77FFxuyoIPvHEIgkq/giphy.gif",
      "https://media.giphy.com/media/RMUKZW6Wmy2mk/giphy.gif",
      "https://media.giphy.com/media/eoZOuZVqMg240/giphy.gif",
      "https://media.giphy.com/media/11raneDZtruZlm/giphy.gif",
      "https://media.giphy.com/media/F14PSwQhrjQ9a/giphy.gif",
      "https://media.giphy.com/media/3ohjUOpLsuAoBuryp2/giphy.gif",
      "https://media.giphy.com/media/aNFT7eG2rIKK715uLk/giphy.gif",
      "https://media1.tenor.com/images/83d3206895a105f1733c7a220cf1fc1f/tenor.gif?itemid=14725928",
      "https://media1.tenor.com/images/cfbc067a1445d5baa5ca36cc2642a6c4/tenor.gif?itemid=5664724",
      "https://media.tenor.com/images/e53395c983ab83a7b46737e13fd8addb/tenor.gif",
      "https://media1.tenor.com/images/395888c0e70dd23c5a7bc76122f80088/tenor.gif?itemid=5169671",
      "https://media1.tenor.com/images/08035897f5dfbf24add1a88aeeedb5ae/tenor.gif?itemid=16278176",
      "https://media1.tenor.com/images/380b96c755c9d0855a784c8f51e1515f/tenor.gif?itemid=7885147",
    ];
    const randomImage =
      imagesAngry[Math.floor(Math.random() * imagesAngry.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(
          `Watch out ${member.username} maybe ${message.author.username} is angry! 🤬`
        )
        .setColor("#FF00A6")
        .setImage(randomImage)
        .setTimestamp();
      message.channel.send(embed);
    } else {
      message.channel.send("❌ | Please specify someone");
    }
  },
};
