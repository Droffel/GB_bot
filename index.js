const Discord = require("discord.js");

const Token = "NTY0NTA3MjQyMTMzNzE3MDAy.XKujTg.4aNQD2hNa9E9vvC3606nlN3NIjo";

const Prefix = "T"

var bot = new Discord.Client();

var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Only time will tell",
  "I Dunno, do you?"
];

bot.on("ready", function() {
  console.log("ready");
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString() + "Hi and welcome to the Rezzzz Discord server!");

  member.addRole(member.guild.roles.find("name", "Member"))
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
    case "FortuneTeller":
    if (args[1]) message.channel.sendmessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.sendmessage("Can't read that")
    break;

    default:
    message.channel.sendMessage("Sorry pal, that ain't a command!")
  }
});

bot.login(process.env.Token);
