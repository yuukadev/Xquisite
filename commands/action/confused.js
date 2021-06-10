const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    name: 'confused',
    description: 'this command sends a confusing gif',
    category: 'action',
    example: ['!confused @member'],
    callback({message}) {
        let member = message.mentions.users.first();
        const imagesConfused = [
           "https://media.giphy.com/media/i0QxELpBECp4Q/giphy.gif",
           "https://media1.tenor.com/images/357aa02bb868b08546ea4f60d2a2299b/tenor.gif?itemid=11602591",
           "https://media1.tenor.com/images/44ea63f3daee92d4c0e1da6c3f3b669c/tenor.gif?itemid=12390150",
           "https://media1.tenor.com/images/4370d233d5a77bc6054ce55c2bd125d7/tenor.gif?itemid=5609852",
        ]
        const randomImage = imagesConfused[Math.floor(Math.random() * imagesConfused.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`Hmmm ${member.username} just confused ${message.author.username} :confused:`)
            .setColor('#FF00A6')
            .setImage(randomImage)
            .setTimestamp()
            message.channel.send(embed);
        } else {
            message.channel.send('❌ | Please specify someone');
        }
    }
}