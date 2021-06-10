const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    name: 'hug',
    description: 'this command sends a hug gif',
    category: 'action',
    example: ['!hug @member'],
    callback({message}) {
        let member = message.mentions.users.first();
        const imagesHug = [ // All the gifs
            "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
            "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
            "https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif",
            "https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif",
            "https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif",
            "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
            "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
            "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
            "https://media.giphy.com/media/du8yT5dStTeMg/giphy.gif",
            "https://acegif.com/wp-content/gif/anime-hug-59.gif",
            "https://acegif.com/wp-content/gif/anime-hug-38.gif",
            "https://acegif.com/wp-content/gif/anime-hug-86.gif",
            "https://acegif.com/wp-content/gif/anime-hug-14.gif",
            "https://acegif.com/wp-content/gif/anime-hug-3.gif",
            "https://acegif.com/wp-content/gif/anime-hug-84.gif",
            "https://acegif.com/wp-content/gif/anime-hug-36.gif",
            "https://acegif.com/wp-content/gif/anime-hug-45.gif",
            "https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif?itemid=14106856",
            "https://media1.tenor.com/images/4db088cfc73a5ee19968fda53be6b446/tenor.gif?itemid=14637016",
            "https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif?itemid=9200935",
            "https://media1.tenor.com/images/78d3f21a608a4ff0c8a09ec12ffe763d/tenor.gif?itemid=16509980",
            "https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif?itemid=16831471",
            "https://media1.tenor.com/images/1b532e3c2000ac2c4fb3ce033f3a7ccd/tenor.gif?itemid=18996997"
        ]
        const randomImage = imagesHug[Math.floor(Math.random() * imagesHug.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`You hugged ${member.username}! :smiling_face_with_3_hearts:`) // Message that is sended
            .setColor('#FF00A6')
            .setImage(randomImage)
            .setTimestamp()
            message.channel.send(embed);
        } else {
            message.channel.send('❌ | Please specify someone');
        }
    }
}