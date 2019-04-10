const Discord = require("discord.js");

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
  "Nah I don't think so you bitch, BTW Noel is a fliping beast!",
  "Only Noel knows...",
  "Only Droffel knows...",
  "Only Emil knows...",
  "Only Spence knows...",
  "I won't answer dat >:("
];

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

    default:
    message.channel.sendMessage("Sorry pal, that ain't a command!");
  }
});

bot.login(process.env.Token);
