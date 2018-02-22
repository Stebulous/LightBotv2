exports.run = function(bot, msg) {
  msg.delete().then(() => {
    if (msg.author.presumed_rank == 5) {
      console.log('[!] Restarting Bot...');
      process.exitCode = 1;
      process.exit();
    }

    if (msg.author.presumed_rank != 5) {
      msg.channel.send(':x: That command is staff only!');
    }
  });
};

exports.info = {
  name: 'restart',
  usage: 'restart',
  description: 'Restarts the bot (OWNER ONLY)'
};
