const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
  
  if(args[0] == "role") {
    let role = new Discord.MessageEmbed()
    .setTitle("<:user:766833053489299456> Autorole Membro")
    .setDescription(`Cargo do autorole member - <@&${db.get(`autoroleM_${message.guild.id}`)}>`)
    message.channel.send(role)
  } else {

let error = new Discord.MessageEmbed()
.setTitle("Error!")
.setDescription(`<:user:766833053489299456> - by!autoRoleMembers @cargo
_Seta o cargo mencionado para Membros que entra no Servidor_`)

let cargo = message.mentions.roles.first()

if(!cargo || !args[0]) return message.channel.send(error)

db.set(`autoroleM_${message.guild.id}`, cargo.id)

let embed = new Discord.MessageEmbed()
.setTitle(`Sucesso`)
.setDescription(`O autorole de membros foi mudado para ${cargo}.`)
message.channel.send(embed)
}
}