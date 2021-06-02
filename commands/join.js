module.exports = {
	name: 'join',
	description: 'Command to join users channel',
	execute(message){
		// console.log(message);
		if(!message.member.voice.channel)
			message.channel.send('Please join a Voice Channel first.')
		else{
			message.member.voice.channel.join();
		}	

	}
}