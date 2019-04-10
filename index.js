const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const Token = "NTY0NTA3MjQyMTMzNzE3MDAy.XKujTg.4aNQD2hNa9E9vvC3606nlN3NIjo";
const Prefix = "_"



var bot = new Discord.Client();

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Only time will tell!",
  "I Dunno, do you?",
  "Eat a Swedish Köttbulle and all answers will be clear :)",
  "Nah I don't think so you bitch, BTW Noel is a flipping beast!",
  "Only Noel knows...",
  "Only Droffel knows...",
  "Only Emil knows...",
  "Only Spence knows...",
  "I won't answer dat :angry: !"
];

function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playstream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });

}

var servers = {};

bot.on("ready", function() {
  console.log("ready");
});


bot.on("message", function(message) {
  console.log(message.content);
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(Prefix)) return;

  var args = message.content.substring(Prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
    message.channel.sendMessage("Pong!");
    break;
    case "commands":
    message.channel.sendMessage("i can use the commands: _ping, _play, _MyCreator, _8ball");
    break;
    case "mycreator":
    message.channel.sendMessage("i was created by the one and only Droffel!");
    break;
    case "8ball":
    if (args[1]) {
      message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    } else {
      message.channel.sendMessage("Can't read that!");
    }
    break;
    case "play":
    if (!args[1]) {
      send.channel.message("please provide a link!")
    }

    if (!message.member.voicechannel) {
      send.channel.message("you must be in a voicechannel!")
    }

    if (!servers[message.guild.id]) servers[message.guild.id] = {
      queue: []
    };

    var server = servers[message.guild.id];

    server.queue.push(args[1]);
    break;



    var server = servers[message.guild.id];

    if (!message.guild.voiceConnection) message.member.voiceChannel.join(). then(function(connection) {
      playconnection, message);
    });

    break;

    case "skip":
    var server = servers(message.guild.id);
    if (server.dispatcher) server.dispatcher.end();
    break;

    case "stop":
    var server = servers(message.guild.id);
    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    break;

    default:
    message.channel.sendMessage("Sorry pal, that ain't a command!");
  }
});

bot.login(process.env.Token);
