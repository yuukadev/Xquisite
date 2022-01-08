const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "this command sends list of bot commands",
  category: "info",
  example: ["x!help"],
  callback: ({ message }) => {
    const embed = new Discord.MessageEmbed()
      .setColor("#FF00A6")
      .setAuthor("Xquisite Help", message.author.avatarURL({ dynamic: true }))
      .setDescription(
        "For more info on a command use `x!help <name>` You can always check our [page](https://yuukadev.gitbook.io/xquisite-discord-bot/) for more detailed information."
      )
      .addFields({
        name: "Moderation Commands ⚙️",
        value:
          "`x!ban` `x!kick` `x!mute` `x!unmute` `x!clear` `x!addrole` `x!removerole`",
        inline: false,
      })
      .addFields({
        name: "Fun Commands 🎉",
        value:
          "`x!meme` `x!quote` `x!coinflip` `x!reverse` `x!roll` `x!8ball` `x!howgay` `x!color` `x!panda` `x!joke`",
        inline: false,
      })
      .addFields({
        name: "Anime Commands ✨",
        value: "`x!anime` `x!manga` `x!ranime` `x!qanime`",
        inline: false,
      })
      .addFields({
        name: "Action Commands 🎬",
        value:
          "`x!hug` `x!punch` `x!slap` `x!pat` `x!pout` `x!blush` `x!kiss` `x!stare` `x!angry` `x!cuddle` `x!confused` `x!bite`",
        inline: false,
      })
      .addFields({
        name: "Image Commands 🗺️",
        value:
          "`x!trigger` `x!wanted` `x!shit` `x!spank` `x!affect` `x!invert` `x!gay` `x!blur` `x!hitler` `x!rip` `x!trash` `x!wasted`",
        inline: false,
      })
      .addFields({
        name: "Info Commands 📜",
        value: "`x!help` `x!avatar` `x!userinfo` `x!serverinfo`",
        inline: false,
      })
      .setFooter("Prefix - x!")
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  },
};
