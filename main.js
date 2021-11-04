require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "REACTION"],
});

const CommandHandler = require("wokcommands");

client.once("ready", () => {
  console.log("Bot je uključen");
  client.user.setActivity("x!help | x!info");

  new CommandHandler(client, {
    commandsDir: "commands",
    showWarns: false,
    disabledDefaultCommands: ["command", "help", "language", "requiredrole"],
  }).setDefaultPrefix("x!");
});

client.login(process.env.BOT_TOKEN);
