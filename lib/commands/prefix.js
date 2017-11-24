exports.run = function(bot, msg) {
  // Require() just the RichEmbed class from discord
  const { RichEmbed } = require('discord.js');

  const embed = new Discord.RichEmbed()
    .setAuthor('Prefix')
    .setColor(0x00ae86)
    .setDescription('My current prefix is ' + bot.config.prefix)
    .setFooter('Note: Support for changing my prefix will be added soon.');

  message.channel.send({ embed });

  msg.delete();
  msg.channel.send(embed).then(m => {
    m.delete(3000);
  });
};

exports.info = {
  name: 'prefix',
  usage: 'prefix',
  description:
    'Tells you the current prefix. (Support for giving custom prefix coming soon)'
};
