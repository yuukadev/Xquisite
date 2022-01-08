const { MessageAttachment } = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "wanted",
  description: "This command sends wanted avatar",
  category: "image",
  example: ["x!wanted"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.wanted(avatar);
      let attachment = new MessageAttachment(image, "image.gif");

      message.channel.send({ files: [attachment] });
    } catch (err) {
      return message.reply("There was something wrong :(");
    }
  },
};
