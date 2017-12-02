exports.run = function (bot, msg, args) {

    if (msg.author.id !== '186989309369384960') {
        msg.delete();
        msg.channel.send(':x: Only the owner can do that.').then(m => {m.delete(4000)});
        return;
      }
    if (args.length < 1) {
      msg.delete();
      msg.channel.send(':x: Syntax Error \n Use ``' + bot.config.prefix + 'help announce`` for help.').then(m => {m.delete(4000)});
      return;
    }
      msg.delete();
      msg.guild.channels.find('name', 'bot-spam').send(args.join(' '));
    };
    

exports.info = {
    name: 'announce',
    usage: 'announce [message]',
    description: 'Sends an announcement to #news. (Admin only)'
};