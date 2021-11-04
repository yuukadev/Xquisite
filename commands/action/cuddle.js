const Discord = require("discord.js");
const Math = require("mathjs");

module.exports = {
  name: "cuddle",
  description: "this command sends a cuddling gif",
  category: "action",
  example: ["!cuddle @member"],
  callback({ message }) {
    let member = message.mentions.users.first();
    const imagesCuddle = [
      "https://media1.tenor.com/images/7edded2757934756fdc240019d956cb3/tenor.gif?itemid=16403937",
      "https://media1.tenor.com/images/a829b33d49f61a042728c06347bddd57/tenor.gif?itemid=5166505",
      "https://media1.tenor.com/images/9af57b60dca6860724a0ff6c1689c246/tenor.gif?itemid=8467962",
      "https://media1.tenor.com/images/6f7eebef17bf270fd7e1cb9117d190be/tenor.gif?itemid=16542536",
      "https://media1.tenor.com/images/5e007281145725639ae2e182a7f734d8/tenor.gif?itemid=11742921",
      "https://media1.tenor.com/images/d16a9affe8915e6413b0c1f1d380b2ee/tenor.gif?itemid=12669052",
      "https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750",
      "https://media1.tenor.com/images/94e6a5bca46ddbf4295a858add086224/tenor.gif?itemid=20714094",
    ];
    const randomImage = imagesCuddle[Math.floor(Math.random() * imagesCuddle.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(
          `That's cute ${message.author.username} is cuddling with ${member.username} 😊`
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
