const Discord = require('discord.js')

exports.run = async (client, message) => { 
 if(!message.member.hasPermission("BAN_MEMBERS")) { 
   let embed2 = new Discord.MessageEmbed()
 .setDescription(`Você não tem permissão`)
 message.channel.send(embed2);
}

 try {
 let output = '';
 let i = 0
    let embed = new Discord.MessageEmbed()
 .setDescription(`Clique em <a:Yes2:740764723179683940> para enviar a lista de bans, e <a:No:740765116051750977> para cancelar.`)
 message.channel.send(embed)
 .then(async (msg) => {
 await msg.react("740764723179683940")
 await msg.react("740765116051750977")
 const filtro = (reaction, user) => ['Yes2', 'No'].includes(reaction.emoji.name) && user.id === message.author.id
 const coletor = msg.createReactionCollector(filtro)
 
 coletor.on("collect", r => {
 
 switch (r.emoji.name) {
 case 'Yes2':
 
 msg.reactions.removeAll
 msg.delete()
 message.guild.fetchBans().then(async (bans) => {
 message.channel.send(`Enviei a lista dos banimentos do server ${message.guild.name}`);
 bans.forEach(async (ban) => {
 i++;
 
 await message.author.send(i+ '.**Nome:**' + ban.user.username + ' | **ID:** ' + ban.user.id + ' | **bot:**' + ban.user.bot + '');
 
 })
 })
 break;
 case 'No': 
 msg.reactions.removeAll
 msg.delete().then(message.channel.send(`O envio foi cancelado.`));
 break;
 } 
 })
 })
 } catch (err) {
 message.channel.send('Um erro aconteceu! \n' + err).catch();
 }
}