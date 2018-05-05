const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + '/public/'));

const music = new Music(client, {
  youtubeKey: process.env.YT_TOKEN,
  anyoneCanSkip: true
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/start', function (req, res) {
  client.login(process.env.DISCORD_TOKEN).then(() => {
    res.send({ "status": "EsteBot started successfully !" });
  }).catch(err => {
    res.send({ "status": JSON.stringify(err.message) });
    client.destroy();
  });
});

app.listen(80);