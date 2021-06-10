/* This command sends welcome message to the member that joins in server*/

module.exports = (client) => {
    const channelId = "841358313983049738"; // Channel ID
    client.on("guildMemberAdd", (member) => {
        const message = `Welcome <@${member.id}> to our server!`; // Welcome Message

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};