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
const distube = new DisTube(client, {searchSongs: false, emitNewSongOnly: true, });

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

    if(command == 'play') {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        distube.play(message, string);
    }

    if (command == "skip") {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        let queue = await distube.getQueue(message);
        if(queue) {
            distube.skip(message)
        } else if (!queue) {
            return;
        };
    }

    if(command == 'pause') {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        distube.pause(message, string);
        return message.channel.send('⏸️ | Song is now paused | 🎵');
    }

    if(command == 'resume') {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        distube.resume(message, string);
        return message.channel.send('▶️ | Song is played again | 🎵');
    }

    if (command == "loop") {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        distube.setRepeatMode(message, parseInt(args[0]));
        return message.channel.send('🔁 | Loop is now enabled | 🎵');
    }

    if (command === 'queue') {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
		const queue = distube.getQueue(message)
		message.channel.send(`🎵 | Music Queue | 🎵\n${queue.songs.map((song, id) =>
			`**${id + 1}**. \`${song.name} - ${song.formattedDuration}\``).slice(0, 10).join('\n')}`)

        if(queue === null || queue === undefined) {
            message.channel.send(`Radi \n${queue.songs.map((song, id) =>
                `**${id + 1}**. \`${song.name} - ${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
        }
	}

    if (command == "leave") {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        distube.stop(message, string);
        message.channel.send('📃 | Player is now leaving | 🎵');
    }
});

// Queue status template
const status = (queue) => `"All Queue" : "This Song" : "Off"}\``

// Distube Event Listener
distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `▶️ | Song \`${song.name}\` is now playing | 🎵`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `✅ | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user} | 🎵`
    ))
    .on("empty", message => message.channel.send("🔒 | Channel is empty, Leaving the channel | 🔒"))
    .on('initQueue', queue => {
        queue.autoplay = false;
        queue.volume = 100;
    });
    


// Your Token
client.login(process.env.BOT_TOKEN);


