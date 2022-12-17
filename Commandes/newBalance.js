const Discord = require("discord.js")

module.exports = {
    name: "newBalance",

    async run(bot, message, balanceValue, userName, solde) {
        if (Number.isNaN(balanceValue) || balanceValue < 0){
            message.channel.send("Valeur invalide")
            return solde;
        } 

        message.channel.send(`**${userName}** a modifié le solde`);
        return Number.parseInt(balanceValue);
    }
}