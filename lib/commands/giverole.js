const userroles = require('../userroles.json')

exports.run = function (bot, msg, args) {

    msg.delete();
    let r = userroles[args];

    if (args.length < 1) {
        msg.channel.send(':x: Syntax Error\nUse ``' + bot.config.prefix + 'help giverole`` for help.').then(m => { m.delete(3000) });
        return;
    }

    if (args.length > 1) {
        msg.channel.send(':x: Syntax Error\nUse ``' + bot.config.prefix + 'help giverole`` for help.').then(m => { m.delete(3000) });
        return;
    }

    if (msg.member.hasRole(r)) {
        msg.channle.send(':x: You already have that role!').then(m => { m.delete(3000) });
        return;
    }

    msg.member.addrole(r).then(
        msg.channel.send(":white_check_mark: You've been givin the role ``" + r + "``.").then(m => { m.delete(3000) })
    );

}
exports.info = {
    name: 'giverole',
    usage: 'giverole [role name]',
    description: 'Gives you the specified role. For a list of roles available, use ".grlist"'
};