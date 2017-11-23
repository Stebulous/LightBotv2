exports.run = function (bot, msg) {
	msg.delete();
	msg.channel.send('**_ANOTHERONE BITES THE DUST_** ' + '\n\n' + '``' + msg.author.username + '`` Killed Themselves.')
    .then(m => {msg.delete(10000)
	});
}

	exports.info = {
    name: 'kms',
    usage: 'kms',
    description: 'Makes the bot react to you killing yourself.'
};