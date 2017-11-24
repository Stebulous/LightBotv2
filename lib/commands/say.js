exports.run = function(bot, msg, args) {
  if (msg.author.id !== '186989309369384960') {
    message.channel.send(':x: Only the owner can do that.');
    return;
  }

  msg.delete();
  msg.channel.send(args.join(' '));
};

exports.info = {
  name: 'say',
  usage: 'say [message] (OWNER ONLY)',
  description: 'Makes the bot repeat your words.'
};
