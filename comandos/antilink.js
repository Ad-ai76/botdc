const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Você precisa da permissão 'gerenciar servidor' para este comando.`)

 let error = new Discord.MessageEmbed()
 .setTitle("Antilinks")
 .setDescription("Você precisa falar on, para ativar ou off, para desativar.")

  if(args[0] != "on" && args[0] != "off" || !args[0]) return message.channel.send(error)
  
  if(args[0] == "on") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Antilinks")
    .setDescription("<:on:746756999957446727> | O antilinks está ativado!")
    message.channel.send(embed)
 db.set(`invite_${message.guild.id}`, "yes")   
  } 
  
  if(args[0] == "off") {
    let embed2 = new Discord.MessageEmbed()
    .setTitle(`Antilinks`)
    .setDescription(`<:off:746757022845763724> | O antilinks está desativado!`)
    message.channel.send(embed2)
    db.set(`invite_${message.guild.id}`, "no")
  }
  
}