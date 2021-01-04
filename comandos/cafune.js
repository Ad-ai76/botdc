const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/p29IAp1.gif',
  'https://imgur.com/vbXWL99.gif',
  'https://imgur.com/7xRSZCP.gif',
  'https://imgur.com/nph5ojV.gif',
  'https://imgur.com/r9nI55n.gif',
  'https://imgur.com/tjUfYST.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fazer cafune');
}
/*
message.channel.send(`${message.author.username} **acaba de fazer cafune** ${user.username}! ❤️`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('cafune')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de fazer cafune ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('q fofo ;3')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}