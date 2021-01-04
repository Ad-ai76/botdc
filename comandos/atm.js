const discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: "balance",
  aliases: ["coins"],
  description: "Check your balance",
  run: async (client, message, args) => {
let user = message.mentions.members.first() || message.author //Searching for the user

 let money = db.fetch(`money_${user.id}`)
 
 if(money === null) money = 0 
    
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${user.username}'s balance`)
    .setDescription(`${user} has ${money}$`)
    message.channel.send(embed) //Making it send the embed
    }
}