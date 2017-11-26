exports.run = function(bot, msg) {
  msg.delete();
  var member = msg.mentions.members.first();
  msg.channel.send('**_ILLUMINATI CONFIRMED_** ').then(m => {m.delete(3000)});
  msg.channel.send('``' + member.user.username + '`` Is Illuminati.').then(m => {
    m.delete(3000)});
}

exports.info = {
  name: 'confirm',
  usage: 'confirm [@user]',
  description: 'Exposes a user as illumati.'
};
