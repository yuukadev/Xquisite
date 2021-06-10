const Discord = require('discord.js');

module.exports = {
    name: 'reverse',
    description: 'this command sends reversed word that you put',
    category: 'fun',
    example: ['!reverse @word'],
    callback({message, args}) {
        const msg = args.join(" ")
        let array = msg.split("")
        let reversedArray = array.reverse()

        if(msg) {
            let embed = new Discord.MessageEmbed()
            .setTitle('Reverse Word')
            .setDescription(reversedArray)
            .setColor('#FF00A6');
            message.channel.send(embed)
        } else {
            message.channel.send('Give me something to reverse');
        }
    }
}