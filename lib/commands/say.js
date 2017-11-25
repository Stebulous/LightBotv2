exports.run = function(bot, msg, args) {
  if (msg.author.id !== '186989309369384960') {
    msg.delete();
    msg.channel.send(':x: Only the owner can do that.').then(m => {m.delete(4000)});
    return;
  }
if (args.length < 1) {
  msg.delete();
  msg.channel.send(':x: Syntax Error \n Use ``' + bot.config.prefix + 'help say`` for help.').then(m => {m.delete(4000)});
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
