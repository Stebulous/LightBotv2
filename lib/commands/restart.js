exports.run = function(bot, msg) {
  msg.delete().then(() => {
    if ((["186989309369384960","410455060011810816", "239233310574903297"].indexOf(msg.author.id) === 1)) {
      console.log('[!] Restarting Bot...');
      process.exitCode = 1;
      process.exit();
    }

    if (["186989309369384960","410455060011810816", "239233310574903297"].indexOf(msg.author.id) === -1) {
      msg.channel.send(':x: That command is staff only!');
    }
  });
};

exports.info = {
  name: 'restart',
  usage: 'restart',
  description: 'Restarts the bot (OWNER ONLY)'
};
