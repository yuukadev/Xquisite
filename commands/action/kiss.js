const Discord = require("discord.js");
const Math = require("mathjs");

module.exports = {
  name: "kiss",
  description: "this command sends a kissing gif",
  category: "action",
  example: ["!kiss @member"],
  callback({ message }) {
    let member = message.mentions.users.first();
    const imagesKiss = [
      "https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412",
      "https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515",
      "https://media1.tenor.com/images/02d9cae34993e48ab5bb27763d5ca2fa/tenor.gif?itemid=4874618",
      "https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif?itemid=5649376",
      "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127",
      "https://media1.tenor.com/images/e76e640bbbd4161345f551bb42e6eb13/tenor.gif?itemid=4829336",
      "https://media1.tenor.com/images/632a3db90c6ecd87f1242605f92120c7/tenor.gif?itemid=5608449",
      "https://media1.tenor.com/images/f34f73decaef049f9354b27984dfb09c/tenor.gif?itemid=14958166",
      "https://media1.tenor.com/images/693602b39a071644cebebdce7c459142/tenor.gif?itemid=6206552",
      "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670",
      "https://media1.tenor.com/images/37633f0b8d39daf70a50f69293e303fc/tenor.gif?itemid=13344412",
      "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
      "https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif",
      "https://media.giphy.com/media/kdLyU5mq9mGfm/giphy.gif",
      "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
      "https://acegif.com/wp-content/uploads/anime-kiss-6.gif",
    ];
    const randomImage =
      imagesKiss[Math.floor(Math.random() * imagesKiss.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`You kissed ${member.username}! 😍`)
        .setColor("#FF00A6")
        .setImage(randomImage)
        .setTimestamp();
      message.channel.send(embed);
    } else {
      message.channel.send("❌ | Please specify someone");
    }
  },
};
