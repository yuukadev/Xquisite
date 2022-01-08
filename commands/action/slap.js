const Discord = require("discord.js");
const Math = require("mathjs");

module.exports = {
  name: "slap",
  description: "this command sends a slapping gif",
  category: "action",
  example: ["x!slap @member"],
  callback({ message }) {
    let member = message.mentions.users.first();
    const imagesSlap = [
      "https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif",
      "https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif",
      "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
      "https://media.giphy.com/media/k1uYB5LvlBZqU/giphy.gif",
      "https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif",
      "https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif",
      "https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif",
      "http://i1280.photobucket.com/albums/a489/Lilyfied/Anime%20Gif/slapgif_zps5164a18e.gif",
      "https://media1.tenor.com/images/1c986c555ed0b645670596d978c88f6e/tenor.gif?itemid=13142581",
      "https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612",
      "https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612",
      "https://media1.tenor.com/images/6885c7676d8645bf2891138564159713/tenor.gif?itemid=4436362",
      "https://media1.tenor.com/images/b221fb3f50f0e15b3ace6a2b87ad0ffa/tenor.gif?itemid=8576304",
      "https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720",
      "https://media1.tenor.com/images/0860d681fbe7ad04a2f39735ab939176/tenor.gif?itemid=13642334",
      "https://media1.tenor.com/images/efb03686f6194d7ede283f35807d4442/tenor.gif?itemid=20280731",
      "https://media1.tenor.com/images/10e77248b56ff4d874c3d0f14cfcad17/tenor.gif?itemid=18965728",
      "https://media1.tenor.com/images/f619012e2ec268d73ecfb89af5a8fb51/tenor.gif?itemid=8562186",
      "https://media1.tenor.com/images/45e7f853b25443ffeb86262405c1fc7a/tenor.gif?itemid=16049280",
      "https://media1.tenor.com/images/b797dce439faddabca83352b2c2de550/tenor.gif?itemid=17897223",
      "https://media1.tenor.com/images/6138bdbf998fde7638b8362499ac5427/tenor.gif?itemid=11829035",
      "https://media1.tenor.com/images/13e3bc4bef72b4e2338cfb16e736d68e/tenor.gif?itemid=17787694",
      "https://media1.tenor.com/images/9179deae71e70c6573d3176287e4a4fe/tenor.gif?itemid=16762854",
      "https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394",
      "https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993",
    ];
    const randomImage =
      imagesSlap[Math.floor(Math.random() * imagesSlap.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Ouch you slapped ${member.username}! 😣`)
        .setColor("#FF00A6")
        .setImage(randomImage)
        .setTimestamp();
      message.channel.send({ embeds: [embed] });
    } else {
      message.channel.send("❌ | Please specify someone");
    }
  },
};
