'use strict';

const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const config = (bot.config = require('../config.js'));
const pkg = require('../package.json');
const chalk = require('chalk');
const figlet = require('figlet');
var commands = (bot.commands = {});

process.on('unhandledRejection', err => {
  console.error(
    `Uncaught error (${err.status}): ${
      err.response ? JSON.parse(err.response.text).message : err
    }`
  );
});

//*   Perms
function GetPermissionLevel(user) {
  var guildmemberobject = true;
  if (typeof user.guild === 'undefined') {
    guildmemberobject = false;
  }
  var presumed_rank = 0;

  if (guildmemberobject == true) {
    if (user.guild.owner == user) {
      presumed_rank = 5;
      // Owner
      //  (you can edit perms if you know how too)
    } else if (
      user.hasPermission('ADMINISTRATOR') ||
      user.hasPermission('MANAGE_CHANNELS') ||
      user.hasPermission('MANAGE_GUILD') ||
      user.hasPermission('BAN_MEMBERS')
    ) {
      presumed_rank = 4;
      // Head Administrator
    } else if (
      user.hasPermission('ADMINISTRATOR') ||
      user.hasPermission('MANAGE_CHANNELS') ||
      user.hasPermission('MANAGE_GUILD')
    ) {
      presumed_rank = 3;
      // Administrator
    } else if (
      user.hasPermission('KICK_MEMBERS') ||
      user.hasPermission('MANAGE_MESSAGES') ||
      user.hasPermission('MANAGE_NICKNAMES')
    ) {
      presumed_rank = 2;
      // Moderator
    } else if (
      user.hasPermission('EMBED_LINKS') ||
      user.hasPermissions('ATTACH_FILES') ||
      user.hasPermission('SEND_TTS_MESSAGES') ||
      user.hasPermission('CHANGE_NICKNAME')
    ) {
      presumed_rank = 1;
      // Previleged
    } else if (user.hasPermissions('READ_MESSAGES')) {
      presumed_rank = 0;
      // Normie
    }
  }

  return presumed_rank;
}

var guildmem;

//*  Message function
bot.on('message', msg => {
  if (bot.user.id === msg.author.id) return;

  let content = getContent(msg);

  if (!content) return;

  let split = content.split(' ');
  let command = split[0];
  let args = split.slice(1);

  if (commands[command]) {
    commands[command].run(bot, msg, args);
  }
});

function getContent(msg) {
  let content = msg.content;

  if (!msg.guild) {
    return content;
  } else if (content.startsWith(bot.config.prefix)) {
    return content.substr(bot.config.prefix.length);
  } else if (content.startsWith(bot.user.toString())) {
    return content.substr(bot.user.toString().length);
  }
}

function _extendMsg(msg) {
  msg.embed = function(embed) {
    return this.channel.send('', { embed });
  };
  return msg;
}

bot.on('ready', () => {
  console.log('Loading bot...');
  load();
  console.log(chalk.green.bold(`===== Client loaded as '${bot.user.username}' =====`));
  let g = bot.guilds.first();
  let c = g.channels.find('name', 'general');
  c.send('Bot Ready!').then(m => {m.delete(2000)});
});

function load() {
  commands = bot.commands = {};

  fs.readdirSync('./lib/commands/').forEach(file => {
    if (file.startsWith('_') || !file.endsWith('.js')) return;
    var command = require('./commands/' + file);
    if (typeof command.run !== 'function' || typeof command.info !== 'object') {
      console.log(`/!\\ Attempted to load invalid command file: ${file}`);
      return;
    }
    commands[command.info.name] = command;
  });

  if (commands == {}) console.log('Failed to load any commands!');

  bot.user.setGame(`${config.prefix}help`);
}

module.exports = bot;

bot.login(config.token);
