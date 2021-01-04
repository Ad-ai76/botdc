const Discord = require('discord.js')

exports.run = (client, message, args) => {    


  if(!args[0]) return message.channel.send("<:sad_cat4:585667678828494877> escreva algo para o goularte falar.")
  
  let msg = args.slice(0).join(" ")

message.channel.createWebhook('goularte', {
avatar: 'https://cdn.discordapp.com/attachments/757624006391234789/757718528450232346/goularte.jpg'}).then(w => {
w.send(msg)
})
  message.delete()
}