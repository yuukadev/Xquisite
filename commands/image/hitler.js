const Discord = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "hitler",
  description: "This command sends hitler user avatar",
  category: "image",
  example: ["!hitler" || "hitler @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.hitler(avatar);
      let attachment = new Discord.MessageAttachment(image, "image.gif");

      return message.reply(attachment);
    } catch (err) {
      return message.reply(`There was an error ${err}`);
    }
  },
};