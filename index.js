const Discord = require("discord.js");

const Token = "NTY0NTA3MjQyMTMzNzE3MDAy.XKujTg.4aNQD2hNa9E9vvC3606nlN3NIjo";

const Prefix = "T"

var bot = new Discord.Client();

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
    message.channel.sendMessage("i can use the commands: Tping, Tplay, TMyCreator");
    break;
    case "mycreator":
    message.channel.sendMessage("i was created by the one and only Droffel!");
    break;
    default:
    message.channel.sendMessage("Sorry pal, that ain't a command!")
  }
});

bot.login(process.env.Token);
