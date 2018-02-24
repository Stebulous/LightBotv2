exports.run = function (bot, msg, args) {
  if (["186989309369384960","410455060011810816", "239233310574903297"].indexOf(msg.author.id) === -1) {
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
