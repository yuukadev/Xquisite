const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "trigger",
  description: "This command sends a triggered user's avatar gif",
  category: "image",
  example: ["!trigger" || "!trigger @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await canvacord.Canvas.trigger(avatar);
      let attachment = new Discord.MessageAttachment(image, "triggered.gif");
      
      return message.reply(attachment);
    } catch (err) {
      return message.reply(`There was an error ${err}`);
    }
  },
};
