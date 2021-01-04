const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

if (!message.member.permissions.has("MANAGE_MESSAGES"))
return message.reply("Você precisa da permissão `Gerenciar mensagem`, Para utilizar esse comando");
if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
return message.reply("Eu preciso da permissão `Gerenciar mensagem` para utilizar esse comando")

let text = args.slice(0).join(" ")
if(!text) return message.reply("Você precisa dizer algo no embed")

const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} Disse:`)
.setDescription(args[0])
.setFooter(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
.setTimestamp()

message.channel.send(embed)
}