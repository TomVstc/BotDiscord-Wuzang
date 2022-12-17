const Discord = require("discord.js")

module.exports = {
    name: "removeMoney",

    async run(bot, message, moneyValue, userName, solde) {
        if (Number.isNaN(moneyValue) || moneyValue <= 0 || solde < moneyValue){
            message.channel.send("Valeur invalide")
            return 0;
        } 

        message.channel.send(`**${userName}** a enlevé ${moneyValue}$`);
        return Number.parseInt(moneyValue);
    }
}