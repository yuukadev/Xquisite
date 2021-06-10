const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "this command sends list of bot commands",
    category: 'info',
    example: ['!help'],
    callback: (message) => {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#FF00A6')
        .setTitle('Xquisite Help')
        .setDescription("Here you can see all the commands that the bot provides") 
/*.addFields(
		{ name: 'Moderation', value: ['!ban - Ban Member','!kick - Kick Member','!mute - Mute Member','!unmute - Unmute Member','!clear - Clear Messages'], inline: true },
		{ name: 'Fun', value: ['!meme - Sends meme','!quote - Sends random quote','!hug - Sends a hug gif'], inline: true },
)
*/ 
        .addField('Moderation Commands', ['\`!ban - Ban member\`','\`!kick - Kick member\`','\`!mute - Mute member\`','\`!unmute - Unmute member\`','\`!clear - Clear messages\`'], false)
        .addField("Fun Commands", ['\`!meme - Sends meme\`', '\`!quote - Sends quote\`',], false)
        .addField("Action Commands", ['\`!hug - Sends gif of hugging\`', '\`!punch - Sends gif of punching\`', '\`!slap - Sends gif of slaping\`', '\`!pat - Sends gif of patting\`', '\`!pout - Sends gif of pouting\`', '\`!blush - Sends gif of blushing\`'], false)
        .addField("Info Commands", ['\`!help - Sends help embed about commands\`', '\`!info - Sends info about bot\`', '\`!avatar - Sends avatar\`',], false)
        .addField("Music Commands", ['\`!play - Plays a song\`', '\`!skip - Skips a song\`', '\`!pause - Pause a song\`', '\`!resume - Resume a paused song\`', '\`!loop - Toggles loop\`', '\`!unloop - Disable loop\`', '\`!jump - Jump to the song number in the queue\`', '\`!queue - Shows the queue of songs\`', '\`!leave - Disconnect a player\`'], false)
        .attachFiles('Commands.jpg')
        .setImage('attachment://Commands.jpg')
        .setTimestamp()
        message.channel.send(exampleEmbed);
    }
}