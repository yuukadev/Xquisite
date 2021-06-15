const Discord = require('discord.js');
const Jikan = require('jikan-node');
const mal = new Jikan();

module.exports = {
    callback({message, args}) {

    if(!args[0]) {
        return message.reply('Please tell me what anime to search');
    }

    mal.search("anime", args, "page").then(info => {

    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${info.results[0].title}`)
    .setURL(`${info.results[0].url}`)
    .setDescription(`${info.results[0].synopsis}`)
    .addFields(
    { name: 'Rating', value: `${info.results[0].score}`, inline: true},
    { name: 'Episodes', value: `${info.results[0].episodes}`, inline: true},
    { name: 'Type', value: `${info.results[0].type}`, inline: true},
    { name: 'Rate', value: `${info.results[0].rated}`, inline: true},
    )
    .setImage(`${info.results[0].image_url}`)
    .setTimestamp()
    message.channel.send(embed);
        });
    }
}