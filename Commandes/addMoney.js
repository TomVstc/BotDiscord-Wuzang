const Discord = require("discord.js")

module.exports = {
    name: "addMoney",

    async run(bot, message, moneyValue, userName) {
        if (Number.isNaN(moneyValue) || moneyValue <= 0){
            message.channel.send("Valeur invalide")
            return 0;
        } 

        message.channel.send(`**${userName}** a ajouté ${moneyValue}$`);
        return Number.parseInt(moneyValue);
    }
}