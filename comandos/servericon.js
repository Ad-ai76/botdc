const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Ícone do servidor`)
  .setImage(message.guild.iconURL({ dynamic: true, format: 'png', size: 1024}))
  message.channel.send(embed)
}