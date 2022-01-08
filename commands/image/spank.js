const { MessageAttachment } = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "spank",
  description: "With this command you can spank someone",
  category: "image",
  example: ["x!spank @member"],
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
      let attachment = new MessageAttachment(image, "image.gif");

      message.channel.send({ files: [attachment] });
    } catch (err) {
      return message.reply("There was something wrong :(");
    }
  },
};
