const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    let embedrr = new Discord.MessageEmbed()
    .setDescription(`Desculpe ${message.author} você precissa da permissão gerenciar servidor para este comando.`)
    
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(embedrr)
    
    if(!channel) return message.channel.send("Por favor mencione um canal.")
    
    //Now we gonna use quick.db
    
    db.set(`channel_${message.guild.id}`, channell.id)
    
    message.channel.send(`o canal de invite foi setado a ${channell}`)
  }