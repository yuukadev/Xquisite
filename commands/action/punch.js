const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    name: 'punch',
    description: 'this command sends a punching gif',
    category: 'action',
    example: ['!punch @member'],
    callback({message}) {
        let member = message.mentions.users.first();
        const imagesPunch = [
            "https://media.giphy.com/media/3ohc1292yKn6Z1saGs/giphy.gif",
            "https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif",
            "https://media.giphy.com/media/11HeubLHnQJSAU/giphy.gif",
            "https://media.giphy.com/media/wcIT7dQ5yWbDO/giphy.gif",
            "https://media.giphy.com/media/ahMaehFrEx2BG/giphy.gif",
            "https://media.giphy.com/media/vxXLJxa2gDaord2eib/giphy.gif",
            "https://media.giphy.com/media/YJDmc88k7ttao/giphy.gif",
            "https://media1.tenor.com/images/a7a67336a11b60d292179be1246240c9/tenor.gif?itemid=17175633",
            "https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829",
            "https://media1.tenor.com/images/55507aea306782b916659085fc062909/tenor.gif?itemid=8932977",
            "https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784",
            "https://media1.tenor.com/images/2e36b49b3d26d1e2fe014e5d4c1dbc75/tenor.gif?itemid=15580060",
            "https://media1.tenor.com/images/517f63ce5ffc6426bddd17d7413ebaca/tenor.gif?itemid=5247335",
            "https://media1.tenor.com/images/b82427b0507d43afb17a6c9ddddfa0a9/tenor.gif?itemid=4903584",
            "https://media1.tenor.com/images/175cf269b6df62b75a5d25a0ed45e954/tenor.gif?itemid=20976942",
            "https://media1.tenor.com/images/40b2cf4b167e88d116993a9989e338a4/tenor.gif?itemid=20921161",
            "https://media1.tenor.com/images/d3eec32b0f4acefdc2ffeada1491c984/tenor.gif?itemid=17502714",
            "https://media1.tenor.com/images/ea1cbdb502d575ac8688caebce996a90/tenor.gif?itemid=13777334",
        ]
        const randomImage = imagesPunch[Math.floor(Math.random() * imagesPunch.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`You punched ${member.username}! :rage:`)
            .setColor('#FF00A6')
            .setImage(randomImage)
            .setTimestamp()
            message.channel.send(embed);
        }else { 
            message.channel.send('❌ | Please specify someone');
        }
    }
}