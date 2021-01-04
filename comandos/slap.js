const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/JyWEy1R.gif',
  'https://imgur.com/ZbG3wql.gif',
  'https://imgur.com/fQy0Eai.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa');
}
/*
message.channel.send(`${message.author.username} **acaba de dar um tapa em** ${user.username}! ❤️`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('tapa')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um tapa ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Nem doeu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
﻿