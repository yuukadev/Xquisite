const Discord = require("discord.js");
const Math = require("mathjs");

module.exports = {
  name: "bite",
  description: "this command sends a gif of bitting",
  category: "action",
  example: ["!bite @member"],
  callback({ message }) {
    let member = message.mentions.users.first();
    const imagesBite = [
      "https://media1.tenor.com/images/418a2765b0bf54eb57bab3fde5d83a05/tenor.gif?itemid=12151511",
      "https://media1.tenor.com/images/2a11c95dc96bb7ff64297f66b8a1b019/tenor.gif?itemid=12388163",
      "https://media1.tenor.com/images/c44d08edc28ec862abbd69d799cbd673/tenor.gif?itemid=16088513",
      "https://media1.tenor.com/images/f308e2fe3f1b3a41754727f8629e5b56/tenor.gif?itemid=12390216",
      "https://media1.tenor.com/images/27bc6a2bf2f4731d62528af55f96bbef/tenor.gif?itemid=18449891",
      "https://media1.tenor.com/images/0d192209c8e9bcd9826af63ba72fc584/tenor.gif?itemid=15164408",
      "https://media1.tenor.com/images/3632813a0264ec1fc44525ff86cb1224/tenor.gif?itemid=9060303",
      "https://media1.tenor.com/images/06f88667b86a701b1613bbf5fb9205e9/tenor.gif?itemid=13417199",
      "https://media1.tenor.com/images/128c1cfb7f4e6ea4a4dce9b487648143/tenor.gif?itemid=12051598",
    ];
    const randomImage =
      imagesBite[Math.floor(Math.random() * imagesBite.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(
          `${member.username} you have been bitten by ${message.author.username} 🥴`
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
