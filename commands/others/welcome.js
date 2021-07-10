// This commands sends welcome message for your server


/* Remove the comment if you want this command to work

module.exports = (client) => {
    const channelId = ""; <==== Channel ID goes here

    client.on("guildMemberAdd", (member) => {
        const message = `Welcome <@${member.id}> to our server!`; <==== This is a message that bot sends when a user join's a server

  
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};
*/