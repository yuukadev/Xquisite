const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "trigger",
  description: "This command sends a triggered user's avatar gif",
  category: "image",
  example: ["x!trigger" || "x!trigger @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await canvacord.Canvas.trigger(avatar);
      let attachment = new MessageAttachment(image, "triggered.gif");

      message.channel.send({ files: [attachment] });
    } catch (err) {
      return message.reply("There was something wrong :(");
    }
  },
};
