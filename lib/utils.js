// Color-related constants
const rgbToHex = /rgb\((\s*\d{1,3}(\s*,\s*\d{1,3}){2}\s*)\)/;
const simpleColors = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  pink: '#FF00FF',
  cyan: '#00FFFF'
};

exports.blankLine = function() {
  return '```\n ```\n';
};

exports.randRange = function(start, finish) {
  return start + Math.round(Math.random() * (finish - start));
};

exports.isIpod = function(author) {
  return this.isUser(author, 'ipodtouch0218#0400');
};

exports.isUser = function(user, userString) {
  return (
    user.username === userString.split('#')[0] &&
    user.discriminator === userString.split('#')[1]
  );
};

exports.parseArgs = (args, options) => {
  if (!options)
      return args;
  if (typeof options === 'string')
      options = [options];

  let optionValues = {};

  let i;
  for (i = 0; i < args.length; i++) {
      let arg = args[i];
      if (!arg.startsWith('-')) {
          break;
      }

      let label = arg.substr(1);

      if (options.indexOf(label + ':') > -1) {
          let leftover = args.slice(i + 1).join(' ');
          let matches = leftover.match(/^"(.+?)"/);
          if (matches) {
              optionValues[label] = matches[1];
              i += matches[0].split(' ').length;
          } else {
              i++;
              optionValues[label] = args[i];
          }
      } else if (options.indexOf(label) > -1) {
          optionValues[label] = true;
      } else {
          break;
      }
  }

  return {
      options: optionValues,
      leftover: args.slice(i)
  };
};

exports.sendLarge = (channel, largeMessage, options = {}) => {
  let message = largeMessage;
  let messages = [];
  let prefix = options.prefix || '';
  let suffix = options.suffix || '';

  let max = 2000 - prefix.length - suffix.length;

  while (message.length >= max) {
      let part = message.substr(0, max);
      let cutTo = max;
      if (options.cutOn) {
          /*
           Prevent infinite loop where lastIndexOf(cutOn) is the first char in `part`
           Later, we will correct by +1 since we did lastIndexOf on all but the first char in `part`
           We *dont* correct immediately, since if cutOn is not found, cutTo will be -1, and we dont want that
           to become 0
           */
          cutTo = part.slice(1).lastIndexOf(options.cutOn);

          // Prevent infinite loop when cutOn isnt found in message
          if (cutTo === -1) {
              cutTo = max;
          } else {
              // Correction necessary from a few lines above
              cutTo += 1;

              if (options.cutAfter) {
                  cutTo += 1;
              }
              part = part.substr(0, cutTo);
          }
      }
      messages.push(prefix + part + suffix);
      message = message.substr(cutTo);
  }

  if (message.length > 1) {
      messages.push(prefix + message + suffix);
  }

  this.multiSend(channel, messages, options.delay);
};

exports.multiSend = (channel, messages, delay) => {
  delay = delay || 100;
  messages.forEach((m, i) => {
      setTimeout(() => {
          channel.send(m);
      }, delay * i);
  });
};

exports.embed = (title, description = '', fields = [], options = {}) => {
  let url = options.url || '';
  let timestamp = options.timestamp || false;
  let color = this.getColor(options.color || '#EB3C25');

  // If (fields.length > 0) description += '\n' + fields.map(obj => `\n**${obj.name}**\n${obj.value}`).join('\n');
  if (options.inline)
    fields = fields.map(obj => {
      obj.inline = true;
      return obj;
    });
  // If (fields.length > 0) fields.push({ name: '\u200b', value: '\u200b' });
  if (url !== '') description += '\n';
  return {
    color,
    title,
    fields,
    description: description === '' ? null : `${description}`,
    url,
    video: { url },
    image: { url },
    timestamp: timestamp ? new Date() : null
  };
};

exports.editRole = function(client, roleName, callback) {
  for (const guild of client.guilds) {
    for (const role of guild[1].roles) {
      if (role[1].name === roleName) {
        callback(role[1]);
      }
    }
  }
};

exports.hexToDec = function(hexInput) {
  if (typeof hexInput === 'number') return hexInput;
  if (typeof hexInput !== 'string') return 0;
  if (hexInput.startsWith('#')) hexInput = hexInput.substr(1);
  return parseInt(hexInput, 16);
};

exports.rgbToHex = function(rgb) {
  if (typeof rgb !== 'string') return '#000000';
  if (!rgbToHex.test(rgb)) return '#000000';
  return (
    '#' +
    rgb
      .replace(rgbToHex, '$1')
      .split(',')
      .map(num => parseInt(num.trim()).toString(16))
      .map(num => (num.length < 2 ? '0'.repeat(2 - num.length) + num : num))
      .map(num => (num.length > 2 ? 'FF' : num))
      .join('')
      .toUpperCase()
  );
};

exports.getColor = function(input) {
  if (typeof input !== 'string') return 0;
  if (rgbToHex.test(input)) input = this.rgbToHex(input); // This falls into the next if
  if (input.startsWith('#')) return this.hexToDec(input);
  if (typeof simpleColors[input.toLowerCase()] === 'string')
    return this.getColor(simpleColors[input.toLowerCase()]);
  return 0;
};
