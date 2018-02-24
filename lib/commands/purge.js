exports.run = async (client, message, args, bot) => {
    if (args.length < 1) {
        msg.delete();
        msg.channel.send(':x: Syntax Error \n Use ``.help ' + exports.info.name + '`` for help.').then(m => {m.delete(4000)});
        return;
      }

    const amount = parseInt(args[0], 10);
    if (amount < 1 || amount > 100) {
        throw 'You can only purge between 1 and 100 messages.';
    }
if (["186989309369384960","410455060011810816", "239233310574903297"].indexOf(msg.author.id) === 1){
    const messages = await msg.channel.bulkDelete(Math.min(amount + 1, 100), true);

    (await msg.channel.send(`:fire: Purged \`${messages.size - 1}\` messages.`)).delete(3000);
}};

exports.info = {
    name: 'purge',
    usage: 'purge <1-100>',
    description: 'Purges up to 100 messages',
    guildOnly: true,
    permissions: ['MANAGE_MESSAGES']
};
