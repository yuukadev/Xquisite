const { MessageAttachment } = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "rip",
  description: "This command sends dead user avatar",
  category: "image",
  example: ["x!rip" || "x!rip @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.rip(avatar);
      let attachment = new MessageAttachment(image, "image.gif");

      message.channel.send({ files: [attachment] });
    } catch (err) {
      return message.reply("There was something wrong :(");
    }
  },
};
