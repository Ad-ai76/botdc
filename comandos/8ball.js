const Discord = require("discord.js")
var fortunes = [
 "Sim",
 "Não",
 "Talvez",
 "Eu não sei, tente de novo",
 "Quem sabe?",
 "Isso é um mistério",
 "Não posso te contar",
 "Meu informante disse que não",
 "Provavelmente",
 "Me pergunte mais tarde!",
 "Claro que não!",
 "Não conte comigo para isso",
 "Dúvido muito",
 "não sei,só sei que ele e gay",
 "sua boca é um túmulo."
 

 ];
 
 exports.run = (bot, msg, params) => {
 let embederro = new Discord.MessageEmbed()
 .setTitle(`8ball`)
 .setDescription(`Pergunte algo pra mim!`) 
 .addField(` Exemplo`, `a!8ball Eu sou gay?`)
 .addField(` Permissão`, `**Nenhuma**`)
 .setColor('#FF0000') 
 if(!params[0]){
 return msg.channel.send(embederro)
 }
 console.log('alguem usou o comando de 8ball')
 if (params[0]) msg.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
 else msg.channel.send("aconteceu um erro");
 
  
 };