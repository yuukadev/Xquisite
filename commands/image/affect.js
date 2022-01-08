const { MessageAttachment } = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "affect",
  description: "This command sends inverted color user avatar",
  category: "image",
  example: ["x!affect" || "x!affect @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.affect(avatar);
      let attachment = new MessageAttachment(image, "image.gif");

      message.channel.send({ files: [attachment] });
    } catch (err) {
      message.reply("there was something wrong :(");
    }
  },
};
