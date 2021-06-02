module.exports = {
    name:'ping',
    desc: 'this is a ping comment',
    execute(message,args){
        message.channel.send('Pong!!')
    }

}