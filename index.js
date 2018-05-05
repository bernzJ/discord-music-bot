const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();

const music = new Music(client, {
  youtubeKey: 'youtube_key'
});

client.login("discord_key");