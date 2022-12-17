const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents}); // Intents calculator de discord (https://discord-intents-calculator.vercel.app/)
const loadCommands = require("./Loader/loadCommands");
const config = require("./config");

bot.commands = new Discord.Collection();
bot.login(process.env.TOKEN);
loadCommands(bot);

// Variable
var solde = 0;

bot.on("messageCreate", async message => {
    if(message.author.bot) return;

    var messageSplit = message.content.split(' ');
    messageSplit[0] = messageSplit[0].toLowerCase();
    var userName = message.member.displayName;

    if(messageSplit[0] === "!add"){
        solde += await bot.commands.get("addMoney").run(bot, message, messageSplit[1], userName);
        displaySolde(message);
    }
    if(messageSplit[0] === "!remove"){
        solde -= await bot.commands.get("removeMoney").run(bot, message, messageSplit[1], userName, solde);
        displaySolde(message);
    }
    if(messageSplit[0] === "!balance"){
        displaySolde(message);
    } 
    if(messageSplit[0] === "!resetbalance"){
        solde = 0;
        displaySolde(message);
    } 
    if(messageSplit[0] === "!newbalance"){
        solde = await bot.commands.get("newBalance").run(bot, message, messageSplit[1], userName, solde);
        displaySolde(message);
    }
})

bot.on("ready", async () => {
    
})

function displaySolde(message){
    return message.channel.send("Le solde est de **" + solde + "$**")
}