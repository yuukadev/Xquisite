const Discord = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "shit",
  description: "You just stepped on shit...",
  category: "image",
  example: ["!shit" || "!shit @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.shit(avatar);
      let attachment = new Discord.MessageAttachment(image, "image.gif");

      return message.reply(attachment);
    } catch (err) {
      return message.reply(`There was an error ${err}`);
    }
  },
};
