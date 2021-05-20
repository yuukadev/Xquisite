require('dotenv').config();
const Discord = require('discord.js'),
DisTube = require('distube'),
config = {
    prefix: "!"
};
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION']
})

// Emojis 
/*
✔️
❌
🎵
🔁
▶️
⏹️
*/

// Command Handler && Welcome Command && Distube
const CommandHandler = require("wokcommands");
const welcome = require('./commands/others/welcome');
const distube = new DisTube(client, {searchSongs: false, emitNewSongOnly: false, });

client.once('ready', () => {
    console.log('Bot je uključen');
    client.user.setActivity('!help | !info');

    welcome(client);

    new CommandHandler(client, {
        commands: 'commands'
    });
});

// Distube Commands 
client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();
    const string = args.join(" ");
    ``
    if(!message.member.voice.channel) {
        return message.channel.send('❌You must be in a voice channel to use this command');
    }

    if(command == 'play') {
        distube.play(message, string);
    }

    if(command == 'pause') {
        distube.pause(message, string);
    }

    if(command == 'resume') {
        distube.resume(message, string);
    }

    if (command == "loop") {
        distube.setRepeatMode(message, parseInt(args[0]));
    }

    if (command == "leave") {
        distube.stop(message, string);
        message.channel.send("Leave the channel");
    }

    if (command == "skip") {
        distube.skip(message, string);
    }


    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }
});

// Queue status template
const status = (queue) => `"All Queue" : "This Song" : "Off"}\``

// DisTube event listeners, more in the documentation page
distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `✅ Song \`${song.name}\` has been added to queue`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
    });


// Your Token
client.login(process.env.BOT_TOKEN);


