const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/mQZgE6A.gif',
  'https://imgur.com/hGBRbhh.gif',
  'https://imgur.com/HkAxiNx.gif',
  'https://imgur.com/HkAxiNx.gif',
  'https://imgur.com/mfUHWlL.gif',
  'https://imgur.com/epcPPIN.gif',
  'https://imgur.com/hbGUkBL.gif',
  'https://imgur.com/BACItzP.gif',
  'https://imgur.com/DdsTIQJ.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um abraço');
}
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! ❤️`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('abraço')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Obrigado pelo o abraço :)')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}