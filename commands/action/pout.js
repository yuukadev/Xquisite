const Discord = require("discord.js");
const Math = require("mathjs");

module.exports = {
  name: "pout",
  description: "this command sends a pouting gif",
  category: "action",
  example: ["x!pout @member"],
  callback({ message }) {
    let member = message.mentions.users.first();
    const imagesPout = [
      "https://media.giphy.com/media/TEJe85dPYW0Uw/giphy.gif",
      "https://media.giphy.com/media/X3VrxPijowGC4/giphy.gif",
      "https://media1.tenor.com/images/dfec7d2c203c08f5c6d0ddb82c3dda6f/tenor.gif?itemid=12942766",
      "https://media1.tenor.com/images/b25c3211c622490eef77f8878f2c8fc8/tenor.gif?itemid=16058457",
      "https://media1.tenor.com/images/2aedb9ff34aa111c5789004d22d05a78/tenor.gif?itemid=12144903",
      "https://media1.tenor.com/images/9a6ec326cf3d89ff87a509fbdf2ad5bb/tenor.gif?itemid=17524635",
      "https://media1.tenor.com/images/b3896a1b2f467cad24840634b0d0043d/tenor.gif?itemid=10932049",
      "https://media1.tenor.com/images/f9eecb39244e76c0a098f8ab8f6d00f1/tenor.gif?itemid=17382934",
      "https://media1.tenor.com/images/10e2dd1fb3447338fa9e51d1628789e0/tenor.gif?itemid=6181670",
      "https://media1.tenor.com/images/58a30820fccfd4e5501a10108979f313/tenor.gif?itemid=20005684",
      "https://media1.tenor.com/images/3ea7b9f018307d99cb8d1eada8c8cdd3/tenor.gif?itemid=5960653",
      "https://media1.tenor.com/images/c34238844c45e028417bb4e7b818acef/tenor.gif?itemid=17725106",
      "https://media1.tenor.com/images/d9f9d99b73d599112ceabb0c71eb3185/tenor.gif?itemid=19383389",
    ];
    const randomImage =
      imagesPout[Math.floor(Math.random() * imagesPout.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(
          `${message.author.username} seems to pouts at ${member.username} 🥺`
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
