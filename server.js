const Discord = require('discord.js');
const ytdl = require('ytdl-core');
var pathToFfmpeg = require('ffmpeg-static');
var opusscript = require("opusscript");
const client = new Discord.Client();
const { Player } = require('discord-player');
const player = new Player(client);
client.player = player;
var dotenv = require('dotenv')
dotenv.config();

const prefix = '-';
console.log(pathToFfmpeg);


client.once('ready', () => {
    console.log('Greven is online!');
})

client.on('message', async message => {
    const voiceChannel = message.member.voice.channel;

    if(!message.content.startsWith(prefix) || message.author.bot) return ;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const grevenCitat = ['En å annan!', 'BRUTALEZ MORTALEZ', 'UH UH UH!', "En å annan slushig margaritAH!"]
    const randomCitat = Math.floor(Math.random() * grevenCitat.length);

    if (command === 'uh') {
        message.channel.send(grevenCitat[randomCitat]);
       
    }

    if(command === 'korea') {
        try {
            var connection = await voiceChannel.join();
        } catch (error) {
            console.log(`There was an error connecting to the voice channel: ${error}`);
            return message.channel.send(`There was an error connecting to the voice channel: ${error}`);
        }
    
        const dispatcher = connection.play(ytdl(`https://www.youtube.com/watch?v=RqXnNkmQl5c&feature=youtu.be&ab_channel=%EC%82%AC%EB%82%98%EC%9D%B4%EA%B9%80%EA%B8%B0%ED%9B%88`))
        .on('finish', () => {
            voiceChannel.leave();
        })
        .on('error', error => {
            console.log(error);
        })
    
        dispatcher.setVolumeLogarithmic(5 / 5);
    } else if (command === 'mäktigt') {

        try {
            var connection = await voiceChannel.join();
        } catch (error) {
            console.log(`There was an error connecting to the voice channel: ${error}`);
            return message.channel.send(`There was an error connecting to the voice channel: ${error}`);
        }
    
        const dispatcher = connection.play(ytdl(`https://www.youtube.com/watch?v=bVYg77-KiwE&ab_channel=ColtzColtz`))
        .on('finish', () => {
            voiceChannel.leave();
        })
        .on('error', error => {
            console.log(error);
        })  
        dispatcher.setVolumeLogarithmic(5 / 5);
    } else if (command === 'quitta') {
        if(!message.member.voice.channel) return messasge.channel.send("You need to be in a voice channel to stop the music") ;
        message.member.voice.channel.leave();
        return undefined;
    }
    
});


client.login(process.env.TOKEN);



