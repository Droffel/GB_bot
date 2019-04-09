const Discord = require("discord.js");

const Token = "NTY0NTA3MjQyMTMzNzE3MDAy.XKujTg.4aNQD2hNa9E9vvC3606nlN3NIjo";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("ready")
});

bot.on("message", function(message) {
  console.log(message.content);
});

bot.login(process.env.Token);
