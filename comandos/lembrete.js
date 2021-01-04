const Discord = require('discord.js')
const ms = require("ms")
module.exports.run = async (client, message, args) => {
  message.channel.send(`Vou te lembra de '${args.slice(1).join(' ')}' em ${args[0]}`)
setTimeout(() => {
message.author.send(`Você pediu para eu te lembrar de: ${args.slice(1).join(" ")}`)
 }, ms(args[0]))
}