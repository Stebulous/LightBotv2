exports.run = function (bot, msg) {
	msg.delete();
	msg.channel.send('**_ILLUMINATI CONFIRMED_** ');
	msg.channel.send('``' + msg.mentions.members.first + '`` Is Illuminati.')
    .then(m => {msg.delete(10000);
	});
}

	exports.info = {
    name: 'confirmed',
    usage: 'confirmed <@mention>',
    description: 'Exposes a user as illumati.'
};