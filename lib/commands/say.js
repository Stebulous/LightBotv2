exports.run = function(bot, msg, args) {
  if (msg.author.id !== '186989309369384960') {
    msg.delete();
    msg.channel.send(':x: Only the owner can do that.').then(m => {m.delete(1000)});
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
