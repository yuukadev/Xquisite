const { Client, Intents } = require("discord.js");
const CommandHandler = require("wokcommands");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("Bot je uključen");
  client.user.setActivity("x!help | x!info");

  new CommandHandler(client, {
    commandsDir: path.join(__dirname, "commands"),
    showWarns: false,
    disabledDefaultCommands: ["command", "help", "language", "requiredrole"],
  }).setDefaultPrefix("x!");
});

client.login(process.env.BOT_TOKEN);
