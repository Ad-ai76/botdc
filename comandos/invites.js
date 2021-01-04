const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
let member = message.mentions.users.first() || message.author
 let invs = db.get(`invs3_${member.id}_${message.guild.id}`)
 if(!invs) invs = 0;
 let embed = new Discord.MessageEmbed()
 .setDescription(`${member.tag} tem ${invs} invites`)
 message.channel.send(embed)
}