exports.run = function (bot, msg, args) {
    
    msg.delete();
    if (args.length < 2) {
        return msg.channel.send(':x: Syntax Error.\n Use ``' + bot.config.prefix + 'help dm`` for help.').then(m => {m.delete(2000)});
        }

    if (["186989309369384960","410455060011810816", "239233310574903297"].indexOf(msg.author.id) === 1) {
   return msg.mentions.members.first().user.send(args.slice(1).join(' '));
    }

    msg.channel.send(':x: Only the owner can use this command!').then(m => {m.delete(2000)});
}
    exports.info = {
        name: 'dm',
        usage: 'dm [mention] [message]',
        description: 'Sends mentioned user your message.'
    };
