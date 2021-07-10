const Discord = require('discord.js');
module.exports = {
    name: 'info',
    description: 'This command sends info about bot',
    category: 'info',
    example: ['!info'],
    callback({message}) {

    const embed = new Discord.MessageEmbed()
    .setColor('#FF00A6')
    .setTitle('Xquisite Bot')
    .setURL('https://github.com/YuukaDev/xquisite-discordbot')
    .setAuthor(message.author.username , message.author.avatarURL({dynamic: true}))
    .setDescription("Xquisite is a friendly bot, made purely out of boredom, the goal of this bot is to improve someone's server experience, for more information look at - x!help") 
    .addFields(
		{ name: '</Twitter>', value: '[Twitter Profile](https://twitter.com/yuukasuoh)', inline: true },
		{ name: '</GitHub>', value: '[GitHub Profile](https://github.com/YuukaDev)', inline: true },
        { name: '</Reddit>', value: '[Reddit Profile](https://www.reddit.com/user/Rintarrou)', inline: true },
    )
    .attachFiles('logo.jpg')
    .setImage('attachment://logo.jpg')
    .setTimestamp()
    .setFooter('Made by Yuuka');

    message.channel.send(embed);
    }
}