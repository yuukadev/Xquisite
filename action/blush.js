const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    callback({message}) {
        let member = message.mentions.users.first();
        const imagesBlush = [
            "https://media1.tenor.com/images/84307582253a96e4552d20e3ecef3a33/tenor.gif?itemid=5531498",
            "https://media1.tenor.com/images/cbfd2a06c6d350e19a0c173dec8dccde/tenor.gif?itemid=15727535",
            "https://media1.tenor.com/images/4c03573f06a1bd8841976abdafd16d26/tenor.gif?itemid=15711893",
            "https://media1.tenor.com/images/ad0fbaa8dd27994a8fbab2ab86122c7f/tenor.gif?itemid=13658383",
            "https://media1.tenor.com/images/fc6b82c2c8c045a0b1e6fc91294292c5/tenor.gif?itemid=6215889",
            "https://media1.tenor.com/images/4f270d2727e514056ae63f155ba0cef2/tenor.gif?itemid=13045709",
            "https://media1.tenor.com/images/b10159104084d5ecc1585559ed3e551f/tenor.gif?itemid=11034212",
            "https://media1.tenor.com/images/0b7ef52a4a898735077c7d9886132d5d/tenor.gif?itemid=13159550",
            "https://media1.tenor.com/images/a7e87466022015e036c06c3927c251f9/tenor.gif?itemid=8971744",
            "https://media1.tenor.com/images/c118281cf06513a78e2fdc731db48c1b/tenor.gif?itemid=12942783",
            "https://media1.tenor.com/images/1796f5f2469c4777cadf2a1ab57c6c0d/tenor.gif?itemid=9768769",
            "https://media1.tenor.com/images/90b854ed578721e98f830cd4a84ddbd4/tenor.gif?itemid=18113807",
            "https://media1.tenor.com/images/cd2b092cc8559d663bad5917a184744d/tenor.gif?itemid=15759499",
            "https://media1.tenor.com/images/7fb373e1ea280a01616bdd5323f2ad4e/tenor.gif?itemid=19908156",
            "https://media1.tenor.com/images/e9a24474179b4939c48087a533603426/tenor.gif?itemid=20210060",
            "https://media.giphy.com/media/HPI9m7McNPGN2/giphy.gif",
            "https://media.giphy.com/media/T3Vvyi6SHJtXW/giphy.gif",
            "https://media.giphy.com/media/UrPxdGW62TDtS/giphy.gif"
        ]
        const randomImage = imagesBlush[Math.floor(Math.random() * imagesBlush.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} blushed at ${member.username} :flushed:`)
            .setColor('#FF00A6')
            .setImage(randomImage)
            .setTimestamp()
            message.channel.send(embed);
        } else {
            message.reply('❌ | Please specify someone');
        }
    }
}