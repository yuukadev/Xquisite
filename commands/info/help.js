const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "this command sends list of bot commands",
    category: 'info',
    example: ['x!help'],
    callback: (message) => {
        const embed = new Discord.MessageEmbed()
        .setColor('#FF00A6')
        .setTitle('Xquisite Help')
        .setDescription("Here you can see all the commands that the bot provides") 
/*.addFields(
		{ name: 'Moderation', value: ['x!ban - Ban Member','x!kick - Kick Member','x!mute - Mute Member','x!unmute - Unmute Member','x!clear - Clear Messages'], inline: true },
		{ name: 'Fun', value: ['x!meme - Sends meme','x!quote - Sends random quote','x!hug - Sends a hug gif'], inline: true },
)
*/ 
        .addField('Moderation Commands', ['\`x!ban - Ban member\`','\`x!kick - Kick member\`','\`x!mute - Mute member\`','\`x!unmute - Unmute member\`','\`x!clear - Clear messages\`', '\`x!addrole - Addrole for member\`', '\`x!removerole - Remove role\`'], false)
        .addField("Fun Commands", ['\`x!meme - Sends meme\`', '\`x!quote - Sends quote\`', '\`x!coinflip - Play game coinflip\`', '\`x!reverse - Reverse a word\`', '\`x!roll - Roll a dice\`', '\`x!8ball - Plays 8ball game\`', '\`x!howgay - How much are you gay\`', '\`x!color - Send a random hex color\`'], false)
        .addField("Anime Commands", ['\`x!anime - Search anime\`', '\`x!manga - Search manga\`', '\`x!ranime - Sends random image of anime\`', '\`x!qanime - Sends random anime quote\`'], false)
        .addField("Action Commands", ['\`x!hug - Sends gif of hugging\`', '\`x!punch - Sends gif of punching\`', '\`x!slap - Sends gif of slaping\`', '\`x!pat - Sends gif of patting\`', '\`x!pout - Sends gif of pouting\`', '\`x!blush - Sends gif of blushing\`', '\`x!kiss - Sends gif of kissing\`', '\`x!stare - Sends gif of staring\`', '\`x!angry - Sends gif of anger\`', '\`x!cuddle - Sends gif of cuddling\`', '\`x!confused - Sends gif of confusing\`', '\`x!bite - Sends gif of bitting\`'], false)
        .addField("Info Commands", ['\`x!help - Sends help embed about commands\`', '\`x!info - Sends info about bot\`', '\`x!avatar - Sends avatar\`', '\`x!userinfo - Sends information about a user\`', '\`x!serverinfo - Sends information about a server\`'], false)
        .addField("Music Commands", ['\`x!play - Plays a song\`', '\`x!skip - Skips a song\`', '\`x!pause - Pause a song\`', '\`x!resume - Resume a paused song\`', '\`x!loop - Toggles loop\`', '\`x!unloop - Disable loop\`', '\`x!jump - Jump to the song number in the queue\`', '\`x!queue - Shows the queue of songs\`', '\`x!leave - Disconnect a player\`'], false)
        .addField("Image Commands", [false])
        .setFooter('Prefix - x!')
        .attachFiles('Commands.jpg')
        .setImage('attachment://Commands.jpg')
        .setTimestamp()
        message.channel.send(embed);
    }
}