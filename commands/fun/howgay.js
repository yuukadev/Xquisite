const Discord = require('discord.js');

module.exports = {
    name: 'howgay',
    aliases: 'gay',
    description: "This command sends how much you are gay",
    category: 'fun',
    example: ['!howgay'],
    callback({message}) {
        let member = message.mentions.users.first();

        let random = Math.floor(Math.random() * 101);

        if(!member) {
            message.channel.send('❌ | Please specify someone');
        }

        if(member){
            const embed = new Discord.MessageEmbed()
            .setTitle('Results')
            .setDescription(`${member.username} is ${random}% gay :rainbow:`)
            .setColor('#FF00A6')
    
            message.channel.send(embed);
       }
    }
}