module.exports = {
    minArgs: 1,
    requiredPermissions: ["MANAGE_MESSAGES"],
    syntaxError: "Enter the amount of messages to clear",
    description: "clear messages command",
    callback({message, args}) { 
        if(isNaN(args[0])) {
            return message.reply("Enter a real number");
        }
        if(args[0] > 100) {
            return message.reply("You cannot delete more than 100 messages");
        }
        if(args[0] < 1) {
            return message.reply("You have to delete at least one message");
        }
        
        message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages)
    });
 }
}   