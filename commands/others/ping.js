module.exports = {
  name: "ping",
  cooldown: "5s",
  callback({ message }) {
    message.channel.send("Pong!");
  },
};
