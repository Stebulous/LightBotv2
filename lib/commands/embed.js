exports.run = function(bot, msg, args) {
  if (msg.author.id !== '186989309369384960') {
    message.channel.send(':x: Only the owner can do that.');
    return;
  }

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
  description: 'Makes the bot repeat your words in an embed. (OWNER ONLY)'
};
