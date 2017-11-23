exports.run = function (bot, msg) {
if (msg.author.id !== '186989309369384960') return;
        let args = msg.content.split(" ").slice(1).join(" ");
        msg.delete();
        msg.channel.send(args);
		
		    }


exports.info = {
    name: 'say',
    usage: 'say',
    description: 'Makes the bot repeat your words.'
};