const Discord = require('discord.js');
const Jikan = require('jikan-node');
const mal = new Jikan();
/*
let id = {
    id: [
        { Action:  1},
        { Adventure: 2},
        { Cars: 3},
        { Comedy: 4},	
        { Dementia: 5},	
        { Demons: 6},	
        { Mystery: 7},	
        { Drama: 8},	
        { Ecchi: 9},	
        { Fantasy: 10},	
        { Game: 11},	
        { Hentai: 12},	
        { Historical: 13},
        { Horror: 14},	
        { Kids: 15},	
        { Magic: 16},	
        { Mecha: 18},	
        { Music: 19},	
        { Parody: 20},
        { Samurai: 21},
        { Romance: 22},
        { School: 23},	
        { Shoujo: 25},
        { Shounen: 27},
        { Space: 29},
        { Sports: 30},
        { Vampire: 32},
        { Yaoi: 33},
        { Yuri: 34},
        { Harem: 35},
        { Supernatural: 37},
        { Military: 38},
        { Police: 39},
        { Psychological: 40},
        { Thriller: 41},
        { Seinen: 42},
        { Josei: 43},
        { Thriller: 45},
    ]
}
*/

module.exports = {
    name: 'anime',
    aliases: 'searchanime',
    description: 'this command search for anime you type',
    category: 'anime',
    example: ['!anime', /* Or */ '!searchanime'],
    callback({message, args}) {
    
    let member = message.author;
    
    if(!args[0]) {
        return message.reply('Please tell me what anime to search');
    }

    mal.search("anime", args, 'page').then(info => {
    const embed = new Discord.MessageEmbed()    
        .setAuthor(`📜 Anime for ${member.username}`)
        .setThumbnail(`${info.results[0].image_url}`)
        .setColor('#FF00A6')
        .setTitle(`${info.results[0].title}`)
        .setURL(`${info.results[0].url}`)
        .setDescription(`${info.results[0].synopsis}`)
        .addFields(
            { name: ':calendar: Release Date', value: `${info.results[0].start_date}`, inline: true}, 
            { name: ':calendar_spiral: End Date', value: `${info.results[0].end_date}`, inline: true},
            { name: '✨ Score', value: `${info.results[0].score}`, inline: true},
            { name: '🖥️ Type', value: `${info.results[0].type}`, inline: true},
            { name: '💬 Rating', value: `${info.results[0].rated}`, inline: true},
            { name: '🔩 Episodes', value: `${info.results[0].episodes}`, inline: true},
            )
        .setImage(`${info.results[0].image_url}`)
        .setTimestamp()
        message.channel.send(embed);
            });
    }
}


