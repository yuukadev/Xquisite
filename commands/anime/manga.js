const Discord = require('discord.js');
const Jikan = require('jikan-node');
const mal = new Jikan();

module.exports = {
    callback({message, args}) {
    
    let member = message.author;
    
    if(!args[0]) {
        return message.reply('Please tell me what manga to search');
    }

    mal.search("manga", args, 'page').then(info => {
    const embed = new Discord.MessageEmbed() //Ver 11.5.1 of Discord.js  
    .setAuthor(`📜 Manga for ${member.username}`)
    .setThumbnail(`${info.results[0].image_url}`)
    .setColor('#FF00A6')
    .setTitle(`${info.results[0].title}`)
    .setURL(`${info.results[0].url}`)
    .setDescription(`${info.results[0].synopsis}`)
    .addFields(
    { name: '✨ Score', value: `${info.results[0].score}`, inline: true},
    { name: '💬 Rating', value: `${info.results[0].rated}`, inline: true},
    { name: '🖥️ Type', value: `${info.results[0].type}`, inline: true},
    )
    .setImage(`${info.results[0].image_url}`)
    message.channel.send(embed);
            });
    }
}
