const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const token = 'ODQ5OTE4NTM0NjgzMTk3NTAx.YLiKUQ.Vd-xl8VwEgvhpnz0lL9nXS-3l_0';
const fs = require('fs'); 


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}
client.once('ready', () => {
    console.log('ready');
    client.user.setActivity("very quietely so Lord Ramsay won't hear", {type: "PLAYING"});
});

client.on('message', message => {
    // if(message.content == 'hello there') message.channel.send('General Kenobi');
    const queue = new Map();
    const serverQueue = queue.get(message.guild.id); 
    console.log(serverQueue);
    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: message.member.voice.channel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true,
    }
    console.log(serverQueue);
    queue.set(message.guild.id,queueConstruct);
    console.log(queue.get(serverQueue));
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    else{
        const args = message.content.slice(prefix.length).split(' ');
        const command = args[0].toLowerCase();
        switch(command){
            case 'ping' : client.commands.get('ping').execute(message,args);
            return;  
            case 'hellothere': message,channel.send('General Kenobi!!');
                return;
            case 'play' : if(!args[1]){
                message.channel.send('Please Provide a Valid YouTube Link');
            }
                client.commands.get('play').execute(message, args,queue,queueConstruct);
            return;

            case 'join':  client.commands.get('join').execute(message);
            return;

            case 'leave': client.commands.get('leave').execute(client);
            return;
        }
        
        
    }
    
    
    
});
client.login(token);

