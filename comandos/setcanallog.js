const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    let server = message.guild
  
    
    let embedrr = new Discord.MessageEmbed()
    .setDescription(`<a:No:740765116051750977> | Desculpe ${message.author} você precissa da permissão gerenciar servidor para este comando.`)
    
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(embedrr)
    
    if(!channel) return message.channel.send("Por favor mencione um canal.")
    
    //Now we gonna use quick.db
    
    db.set(`delchannel_${message.guild.id}`, channel.id)
    db.set(`server2_${message.guild.id}`, server.id)
  
    message.channel.send(`o canal de log foi setado a ${channel}`)
  }