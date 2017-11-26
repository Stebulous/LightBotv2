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

    if (msg.member.roles.has(r)) {
        msg.channel.send(':x: You already have that role!').then(m => { m.delete(3000) });
        return;
    }

    if (args == 'list') {
        msg.channel.send('Self Assignable Roles:\n\n``1. html\n\n2. css\n\n3. java\n\n4. javascript\n\n5. golang\n\n6. php\n\n7. ruby\n\n8. python\n\n9. c#\n\n10. c++``').then(m => {m.delete(15000)});
        return;
    }

    if (r == undefined) {
        msg.channel.send(":x: I couldn't find that role!\nUse ``" + bot.config.prefix + "giverole list`` for a list of roles you can get.").then(m => {m.delete(4000)});
        return;
    }

    msg.member.addRole(r).then(
        msg.channel.send(":white_check_mark: You've been givin the role ``" + r + "``.").then(m => { m.delete(3000) })
    );

}
exports.info = {
    name: 'giverole',
    usage: 'giverole [role name]',
    description: 'Gives you the specified role. For a list of roles available, use ".giverole list"'
};