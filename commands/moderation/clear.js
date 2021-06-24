module.exports = {
    name: 'clear',
    description: "This command clear's chat",
    category: 'moderation',
    example: ['!clear @number'],
    callback({message, args}) {
        const permission = message.member.hasPermission("MANAGE_MESSAGES");

        if(!permission) {
            return message.channel.send("❌ | You don't have permission to use this command");
        }

        if(!args[0]) {
            return message.channel.send('📃 | Enter the amount of messages to clear');
        }
        if(isNaN(args[0])) {
            return message.channel.send("❌ | Enter a real number");
        }
        if(args[0] > 100) {
            return message.channel.send("❌ | You cannot delete more than 100 messages");
        }
        if(args[0] < 1) {
            return message.channel.send("❌ | You have to delete at least one message");
        }
        
        message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages)
        });
    }
} 