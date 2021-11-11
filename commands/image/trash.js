const Discord = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "trash",
  description: "This command sends trashed user avatar",
  category: "image",
  example: ["!trash" || "trash @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.trash(avatar);
      let attachment = new Discord.MessageAttachment(image, "image.gif");

      return message.reply(attachment);
    } catch (err) {
      return message.reply(`There was an error ${err}`);
    }
  },
};
