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

    if(command == "skip") {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        const queue = distube.getQueue(message)
        if (!queue) {
            return message.channel.send('❌ | There is nothing played right now!');
        }
        distube.skip(message)
    }

    if(command == "jump") {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        const queue = distube.getQueue(message)
        if (!queue) {
            return message.channel.send('❌ | There is nothing played right now!');
        }
            if(0 <= Number(args[0]) && Number(args[0]) <= queue.songs.length){
                message.channel.send(`✅ | Jumped ${parseInt(args[0])} songs`)
                return distube.jump(message, parseInt(args[0]))
                .catch(err => message.channel.send('❌ | Invalid number'));
            }
            else{
                message.channel.send('❌ | Please use real number');
            }
    }

    if(command == 'pause') {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        const queue = distube.getQueue(message)
        if (!queue) {
            return message.channel.send('❌ | There is nothing played right now!');
        }
        distube.pause(message, string);
        return message.channel.send('⏸️ | Song is now paused | 🎵');
    }

    if(command == 'resume') {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        const queue = distube.getQueue(message)
        if (!queue) {
            return message.channel.send('❌ | There is nothing played right now!');
        }
        distube.resume(message, string);
        return message.channel.send('▶️ | Song is played again | 🎵');
    }

    if(command == "loop") {
        const queue = distube.getQueue(message)
        if (!queue) {
            return message.channel.send('❌ | There is nothing played right now!');
        }
        let looped = distube.setRepeatMode(message, parseInt(args[1]));
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        return looped + message.channel.send('🔁 | Loop is enabled | 🎵');
    }

    if(command == 'unloop') {
        const queue = distube.getQueue(message)
        if (!queue) {
            return message.channel.send('❌ | There is nothing played right now!');
        }
        let looped = distube.setRepeatMode(message, parseInt(args[0]));
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        if(looped) {
        looped = null;
        return message.channel.send('🔁 | Loop is disabled | 🎵');
        }
    }

    if(command === 'queue') {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        const queue = distube.getQueue(message)
        if(!queue) {
            if (!queue) return message.channel.send('❌ | There is nothing played right now!');
        }
        const status = (`\n${queue.songs.map((song, id) =>
			`**${id + 1}**. \`${song.name} - ${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
        const embed = new Discord.MessageEmbed()
        .setAuthor('🎵 | Music Queue | 🎵')
        .setColor('#FF00A6')
        .setDescription(status)
        message.channel.send(embed);
	}

    if(command == "leave") {
        if(!message.member.voice.channel) {
            return message.channel.send('❌ | You must be in a voice channel to use this command');
        }
        message.guild.me.voice.connection.disconnect();
        message.channel.send('📃 | Player is now leaving | 🎵');
    }
});

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


