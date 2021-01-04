const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

  let pessoa = client.users.cache.get(args[0]) || message.mentions.users.first()  
  let pessoa2 = client.users.cache.get(args[1]) || message.mentions.users.last()

  const random = Math.floor(Math.random() * 100)  
  
  





if(!pessoa || !pessoa2) return message.channel.send('\`Lembre-se de mencionar dois usuários para shippar\`')
  if(pessoa === pessoa2) return message.channel.send('\`Mencione duas pessoas diferentes\`')

  const embed = new Discord.MessageEmbed()
  .setTitle(`\`Ship! <3\``)
  .setTimestamp()
  .setDescription(`**As chances de ${[pessoa]} e ${pessoa2} são de ${random}%**`)
  .setImage(`https://api.alexflipnote.dev/ship?user=${pessoa}&user2=${pessoa2}`)
  .setFooter(`Comando executado por ${message.author.username}, shippando ${pessoa.username} e ${pessoa2.username} `)

 message.channel.send(embed)
 
 
console.log('alguem usou o comando de ship')
}
