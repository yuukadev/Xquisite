const Discord = require('discord.js');
const Jikan = require('jikan-node');
const mal = new Jikan();

module.exports = {
    callback({message, args}) {

    if(!args[0]) {
        return message.reply('Please tell me what manga to search');
    }

    mal.search("manga", args, "page").then(info => {
        
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${info.results[0].title}`)
    .setURL(`${info.results[0].url}`)
    .setDescription(`${info.results[0].synopsis}`)
    .addFields(
    { name: 'Rating', value: `${info.results[0].score}` },
    )
    .setImage(`${info.results[0].image_url}`)
    .setTimestamp()
    message.channel.send(embed);
        });
    }
}