const got = require('got')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'meme',
    description: 'this command sends random memes',
    category: 'fun',
    example: ['!meme'],
    callback: ({message}) => {
        got('https://www.reddit.com/r/memes/random/.json').then(res => { // The page that sends meme's
            let content = JSON.parse(res.body)
            message.channel.send(
                new MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("#FF00A6")
                    .setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} | Comments : ${content[0].data.children[0].data.num_comments}`)
            )
        })
    }
}