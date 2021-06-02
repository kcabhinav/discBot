
module.exports = {
	name: 'leave',
	description: 'Command to leave channel',
	execute(message,client){
		// console.log(message);
		if(!client.voice.connections)
			message.channel.send('The bot is not connected to any Voice Channel')
		else{
			message.member.voice.channel.leave();
		}	

	}
}