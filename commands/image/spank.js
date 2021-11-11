const Discord = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "spank",
  description: "With this command you can spank someone",
  category: "image",
  example: ["!spank @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first();

      if (!member) {
        return message.channel.send("❌ | Please specify someone");
      }

      if (member.id === message.author.id) {
        return message.channel.send("why would you spank yourself :O");
      }

      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.spank(
        message.author.displayAvatarURL({ format: "png" }),
        avatar
      );
      let attachment = new Discord.MessageAttachment(image, "image.gif");

      return message.reply(attachment);
    } catch (err) {
      return message.reply(`There was an error ${err}`);
    }
  },
};
