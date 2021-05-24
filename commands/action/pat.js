const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = {
    callback({message}) {
        let member = message.mentions.users.first();
        const imagesPat = [
            "https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819",
            "https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif?itemid=5081286",
            "https://media1.tenor.com/images/f41b3974036070fd1c498acf17a3a42e/tenor.gif?itemid=14751753",
            "https://media1.tenor.com/images/55df4c5fb33f3cd05b2f1ac417e050d9/tenor.gif?itemid=6238142",
            "https://media1.tenor.com/images/93ccdbf8da129c4fdf8a74a73fb34f17/tenor.gif?itemid=14809730",
            "https://media1.tenor.com/images/90712ed3a99db973ec92383a3c6a8767/tenor.gif?itemid=14043105",
            "https://media1.tenor.com/images/005e8df693c0f59e442b0bf95c22d0f5/tenor.gif?itemid=10947495",
            "https://media1.tenor.com/images/d7c326bd43776f1e0df6f63956230eb4/tenor.gif?itemid=17187002",
            "https://media1.tenor.com/images/2b3ddd79058842ccb9c1fc6acea0bcaa/tenor.gif?itemid=16243971",
            "https://media1.tenor.com/images/9bf3e710f33cae1eed1962e7520f9cf3/tenor.gif?itemid=13236885",
            "https://media1.tenor.com/images/0a35a0cc82d3b613086e0f420a94c2ad/tenor.gif?itemid=15779012",
            "https://media1.tenor.com/images/29cc23294c5b85186f7c68c2db4c0d3a/tenor.gif?itemid=20129769",
            "https://media1.tenor.com/images/8331ba63516b37eb6987dcd45c4c0f66/tenor.gif?itemid=11780508",
            "https://media1.tenor.com/images/143a887b46092bd880997119ecf09681/tenor.gif?itemid=15177421",
            "https://media1.tenor.com/images/8d8c95710c8031bb903ff422c81b8cba/tenor.gif?itemid=17435031",
            "https://media1.tenor.com/images/04f19642fb2c5fac067d4e737cc65262/tenor.gif?itemid=17863262",
            "https://media1.tenor.com/images/14668b53f2b7dfca47d70ff219817ff6/tenor.gif?itemid=18764332",
            "https://media1.tenor.com/images/f3d6899f6a49711f5b00f006d3739378/tenor.gif?itemid=19836590",
            "https://media1.tenor.com/images/1e8e613527e76da3caa87181120a9bd9/tenor.gif?itemid=19389750",
            "https://media1.tenor.com/images/3f28bb73946f3091552e083eb72859a8/tenor.gif?itemid=20637980"
        ]
        const randomImage = imagesPat[Math.floor(Math.random() * imagesPat.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`Aww you patted ${member.username}! :blush:`)
            .setColor('#FF00A6')
            .setImage(randomImage)
            .setTimestamp()
            message.channel.send(embed);
        } else {
            message.reply('❌ | Please specify someone');
        }
    }
}