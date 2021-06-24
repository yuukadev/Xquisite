const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'This command play with you 8ball',
    category: 'fun',
    example: ['!8ball @question'],
    callback({message, args}) {
        if(!args[0]) {
            return message.channel.send('❓ | Please ask a full question');
        }

        let replies = ["yes.", 
                       "Outlook seems good.", 
                       "yus", "of course.", 
                       "Yes – definitely.", "no.", 
                       "Better not tell you now.", 
                       "Outlook is not so good..", 
                       "nah", "never", 
                       "Cannot predict now.", 
                       "I dont know.", "I dont know *yet*...", 
                       "not a chance.", "I think so.", 
                       "only for today!", "not for today c:", 
                       "sadly yes..", "sadly no..", 
                       "maybe!", 
                       "ask again.. later.."];
                 
        const randomReplies = replies[Math.floor(Math.random() * replies.length)];

        let embed = new Discord.MessageEmbed()
        .setAuthor(`📜 Answer for ${message.author.username}`)
        .setDescription(`🎱 ${randomReplies}`)
        .setColor('#FF00A6')

        message.channel.send(embed)
    }
}