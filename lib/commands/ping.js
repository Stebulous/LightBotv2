exports.run = (bot, msg) => {
	
	msg.channel.send(':ping_pong: Pong!');

exports.info = {
	name: 'ping',
    usage: 'ping',
    description: 'Shows bot latency.'
};