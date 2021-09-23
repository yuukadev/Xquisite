const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'qanime',
    aliases: 'quoteanime',
    description: "This command sends you random anime quote",
    category: 'anime',
    example: ['!qanime'],
    callback({message}) {
        let animeQuote = async () => {
            try {
                let res = await fetch("https://animechan.vercel.app/api/random");
                let random = await res.json();

                const embed = new Discord.MessageEmbed()
                    .setAuthor(`📜 Character - ${random.character} | 📜 Anime - ${random.anime}`)
                    .setColor('#FF00A6')
                    .setDescription(random.quote)

                message.channel.send(embed);
            }catch(err) {
                message.channel.send('there is something wrong :(');
            }
        }
        animeQuote();
    }
}