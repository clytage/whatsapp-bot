exports.run = (message, bot) => {
    bot.sendText(message.from, "🏓 PONG!");
};

exports.help = {
    name: "Ping",
    description: "PING PONG",
    usage: "ping",
    cooldown: 5
};