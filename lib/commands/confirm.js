exports.run = function (bot, msg, args) {
  msg.delete();

  if (args.length < 1) {
    msg.delete();
    msg.channel.send(':x: Syntax Error \n Use ``' + bot.config.prefix + 'help confirm`` for help.').then(m => {
      m.delete(4000)
    });
    return;
  }

  var member = msg.mentions.members.first();
  msg.channel.send('**_ILLUMINATI CONFIRMED_** ').then(m => {
    m.delete(3000)
  });

  msg.channel.send('``' + member.user.username + '`` Is Illuminati.').then(m => {
    m.delete(3000)
  });
}

exports.info = {
  name: 'confirm',
  usage: 'confirm [@user]',
  description: 'Exposes a user as illumati.'
};
