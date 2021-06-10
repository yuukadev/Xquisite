module.exports = {
    name: 'clear',
    description: "this command clear messages",
    category: 'moderation',
    example: ['!clear @number'],
    minArgs: 1,
    requiredPermissions: ["MANAGE_MESSAGES"],
    syntaxError: "Enter the amount of messages to clear",
    callback({message, args}) { 
        if(isNaN(args[0])) {
            return message.channel.send("❌ | Enter a real number"); // Message when is entered text instead of number
        }
        if(args[0] > 100) {
            return message.channel.send("❌ | You cannot delete more than 100 messages"); // Message when you sends more than 100
        }
        if(args[0] < 1) {
            return message.channel.send("❌ | You have to delete at least one message"); // Message if you enter number that is less than 1
        }
        
        message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages)
    });
 }
} 