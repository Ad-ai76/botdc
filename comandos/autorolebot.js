const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
let error = new Discord.MessageEmbed()
.setTitle("Error!")
.setDescription(`Mencione um cargo!`)

if(!args[0]) return message.channel.send(error)

let cargo = message.mentions.roles.first()

let error2 = new Discord.MessageEmbed()
.setTitle("Error")
.setDescription(`Mencione um cargo.`)

if(!cargo) return message.channel.send(error2)

db.set(`autoroleB_${message.guild.id}`, cargo.id)

let embed = new Discord.MessageEmbed()
.setTitle(`Sucesso`)
.setDescription(`O autorole de bots foi mudado para ${cargo}.`)
message.channel.send(embed)
}