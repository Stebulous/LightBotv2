exports.run = function(bot, msg) {
  msg.delete();
  msg.channel.send(`:ping_pong: Pong!`).then(m => {
    m
      .edit(`:ping_pong: Pong! \`${m.createdTimestamp - msg.createdTimestamp}ms\``)
      .then(m => {
        m.delete(10000);
      });
  });
};
exports.info = {
  name: 'ping',
  usage: 'ping',
  description: 'Pings the bot'
};
