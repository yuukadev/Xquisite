const Discord = require('discord.js');
module.exports = {
    callback({message}) {

    const embed = new Discord.MessageEmbed()
    .setColor('#FF00A6')
    .setTitle('Vaki Nevolja')
    .setURL('https://github.com/YuukaDev/xquisite-discordbot')
    .setAuthor('Yuuka', 'attachment://logo.jpg')
    .setDescription("Oprez svima koji žive na području Novoga Sada prolazi jedna velika zver jača od samoga Augustus-a molimo svakoga da ne izlazi iz kuće dok mi pokušavamo da smirimo ovu zver") 
    .addFields(
		{ name: 'Ime', value: 'Ognjen', inline: true },
		{ name: 'Prezime', value: 'Princ od Banjice', inline: true },
        { name: 'Posao', value: 'Švercuje morfin na granici', inline: true },
    )
    .attachFiles('ogi.jpg')
    .setImage('attachment://ogi.jpg')
    .setTimestamp()
    .setFooter('Sva prava idu Vakiju Princu');

    message.channel.send(embed);
    }
}