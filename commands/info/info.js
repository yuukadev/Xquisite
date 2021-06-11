const Discord = require('discord.js');
module.exports = {
    name: 'info',
    description: "this command sends info about bot",
    category: 'info',
    example: ['!info'],
    callback: (message) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#FF00A6')
    .setTitle('Xquisite Bot')
    .setURL('https://github.com/YuukaDev')
    .setAuthor('Yuuka', 'attachment://logo.jpg', 'https://github.com/YuukaDev')
    .setDescription("Xquisite is a friendly bot, made purely out of boredom, the goal of this bot is to improve someone's server experience, for more information look at - !help") 
    .addFields(
	{ name: '</Twitter>', value: '[Twitter Profile](https://twitter.com/yuukasuoh)', inline: true },
	{ name: '</GitHub>', value: '[GitHub Profile](https://twitter.com/yuukasuoh)', inline: true },
        { name: '</Reddit>', value: '[Reddit Profile](https://www.reddit.com/user/Rintarrou)', inline: true },
    )
    .attachFiles('logo.jpg')
    .setImage('attachment://logo.jpg')
    .setTimestamp()
    .setFooter('Made by Yuuka');

    message.channel.send(exampleEmbed);
    }
}
