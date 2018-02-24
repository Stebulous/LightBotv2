exports.run = function(bot, msg) {
  msg.delete();
msg.channel.send('My current prefix is ``' + config.prefix + '``').then(m => {
    m.delete(3000);
  });
};

exports.info = {
  name: 'prefix',
  usage: 'prefix',
  description:
    'Tells you the current prefix. Virtually useless for now.'
};
