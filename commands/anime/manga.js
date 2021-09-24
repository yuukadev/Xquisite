const Discord = require('discord.js');
const Jikan = require('jikan-node');
const mal = new Jikan();

module.exports = {
    name: 'manga',
    aliases: 'mangasearch',
    description: "This command search for manga you typed",
    category: 'anime',
    example: ['!manga @manganame'],
    callback({message, args}) {
    
    let member = message.author;
    
    if(!args[0]) {
        return message.channel.send('❓ | Please tell me what manga to search');
    }

    mal.search("manga", args, 'page').then(info => {
    const embed = new Discord.MessageEmbed() 
    .setAuthor(`📜 Manga for ${member.username}`)
    .setThumbnail(`${info.results[0].image_url}`)
    .setColor('#FF00A6')
    .setTitle(`${info.results[0].title}`)
    .setURL(`${info.results[0].url}`)
    .setDescription(`${info.results[0].synopsis}`)
    .addFields(
        { name: ':calendar: Release Date', value: `${info.results[0].start_date || 'Not yet aired'}`, inline: true}, 
        { name: ':calendar_spiral: End Date', value: `${info.results[0].end_date || 'Airing'}`, inline: true},
        { name: '✨ Score', value: `${info.results[0].score}`, inline: true},
        { name: '🖥️ Type', value: `${info.results[0].type}`, inline: true},
    )
    .setImage(`${info.results[0].image_url}`)
    message.channel.send(embed);
        });
    }
}
