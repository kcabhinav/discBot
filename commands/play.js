const ytAPI = 'AIzaSyCwkkUtmbEVxAQSGtx7UPk_87UC3miHzCQ';
const fetch = require('node-fetch');
const ytdl = require('ytdl-core');
const fs = require('fs');

async function getTitle(message,URL){
    const response = await fetch(URL);
    const json = await response.json();
    title = json['items'][0]['snippet']['title'];
    message.channel.send('Playing ' + title + ' on YouTube');
        //     return title;
    }
    async function playSong(args,queue){
        var curentSong = 0;
        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
        };//song
        console.log(song);
        function addSong(queueConstruct,song){
            queue.songs.push(song);
            console.log(queConstruct.songs);
        }
        addSong(queueConstruct,song);
        while(curentSong!= null){
            queConstruct.voiceChannel.play(ytdl(queue.songs[currentSong])).on('finish',() => {
                currentSong++;
            });       
            } //while
    }//playSong

    module.exports = {
        name: 'play',
        desc: 'To play a music track based on used input youtube link',
        execute(message,args,queue,queConstruct){

            if(!message.member.voice.channel)
                message.channel.send('Please join a Voice Channel first.')
            else
                message.member.voice.channel.join();  

        const linkType = args[1].includes('youtube')?1:0;//mobile = 0 website = 1
        const id = linkType === 1?args[1].split('?v=')[1]:id = args[1].split('be/')[1];
        const URL = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${ytAPI}%20&part=snippet`;
        
        getTitle(message,URL);
        playSong(args,queue,queConstruct);   
        
        // console.log(ytTitle)


    }
}
