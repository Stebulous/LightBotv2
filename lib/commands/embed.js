exports.run = function (bot, msg, args) {
  if (msg.author.presumed_rank !== 5) {
    message.channel.send(':x: Only the owner can do that.');
    return;
  }

  if (args.length < 1) {
    msg.delete();
    msg.channel.send(':x: Syntax Error \n Use ``' + bot.config.prefix + 'help embed`` for help.').then(m => {
      m.delete(4000)
    });
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
