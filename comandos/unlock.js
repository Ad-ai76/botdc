const Discord = require("discord.js")
exports.run = (client, message, args) => {
 if (!client.lockit) client.lockit = [];
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Você nao tem permissão para usar este comando!** "); message.channel.createOverwrite(message.guild.id, {
 SEND_MESSAGES: null
 })
 message.channel.send(`**${message.author} abri este canal,digite \`lock\` para fecha-lo novamente!**`);
 console.log('alguem usou o comando de unlock')
 };