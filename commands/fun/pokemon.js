const Discord = require("discord.js");
module.exports = {
  callback({ message }) {
    message.author.send("Hello there!");
  },
};
