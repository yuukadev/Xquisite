const Discord = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "blur",
  description: "This command sends inverted color user avatar",
  category: "image",
  example: ["!blur" || "!blur @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.blur(avatar);
      let attachment = new Discord.MessageAttachment(image, "image.gif");

      return message.reply(attachment);
    } catch (err) {
      return message.reply(`There was an error ${err}`);
    }
  },
};
