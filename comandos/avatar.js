const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author

let avatar = user.avatarURL({ dynamic: true, size: 1024 })

let embed = new Discord.MessageEmbed()
.setAuthor(`${user.username}`)
.setDescription(`**[Baixe o Avatar Aqui](${avatar})**`) //Isso será para Baixar o Avatar pelo Link.
.setImage(avatar)
.setColor("#000000") 

message.channel.send(embed)
}