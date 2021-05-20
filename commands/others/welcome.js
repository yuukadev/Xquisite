module.exports = (client) => {
    const channelId = "841358313983049738";
    client.on("guildMemberAdd", (member) => {
        const message = `Welcome <@${member.id}> to our server!`;

  
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};