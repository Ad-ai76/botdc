const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  if(!['692728615653212310', '639995261967663104', '685820186502365187'].includes(message.author.id)) return;
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  if(!user) return;
  db.set(`blacklist_${user.id}`, 'não')
  message.channel.send(`Sistema: O usuário ${user.tag} foi unblacklistado.`)
  function randomChoice(arr) { return arr[Math.floor(Math.random() * arr.length)]}; idCanais = []; client.guilds.cache.get(message.guild.id).channels.cache.forEach((channel) => {idCanais.push(channel.id)}); canal = randomChoice(idCanais); client.guilds.cache.get(message.guild.id).channels.cache.get(canal).createInvite().then(i => {
  let embed = new Discord.MessageEmbed()
  .setDescription(`⚠️ ┃ ${user.tag} Removido a Blacklist!

> Removido por: ${message.author.tag}
> <:setabrilho:766437687758290954> Nickname: ${user.username}
> <:setabrilho:766437687758290954> ID: ${user.id}
[${message.guild.name}](https://discord.gg/${i.code})`)
  .setColor('#24FF00')
  client.channels.cache.get('736063136167100486').send(embed)
  })
}