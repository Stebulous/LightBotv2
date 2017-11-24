exports.run = function(bot, msg) {
  if (msg.author.id !== '186989309369384960') return;
  let args = msg.content
    .split(' ')
    .slice(1)
    .join(' ');
  msg.delete();
  msg.channel.send({
    embed: {
      color: 3447003,
      description: args
    }
  });
};

exports.info = {
  name: 'embed',
  usage: 'embed [message]',
  description: 'Makes the bot repeat your words in an embed.'
};
