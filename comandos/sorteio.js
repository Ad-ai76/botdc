const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
 name: "sorteio",
 description: "Create a simple sorteio",
 usage: "<tempo> <canal> <prêmio>",
 category: "fun",
 run: async (bot, message, args) => {
 	if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`  ·  ${message.author}, ***Você precisa possuir a permissão de \`Gerenciar Mensagens\` para poder executar este comando!***`)
 if (!args[0]) return message.channel.send(`  |  ***Utilize desta maneira! \`\`!sorteio <Tempo> <#Canal> <Prêmio>\`\`***.`);
 if (
 !args[0].endsWith("d") &&
 !args[0].endsWith("h") &&
 !args[0].endsWith("m") &&
 !args[0].endsWith("s")
 )
 return message.channel.send(
 `  |  ***Eu não encontrei este tipo de hórario!***`
 );
 if (isNaN(args[0][0])) return message.channel.send(`  |  ***Isto não é um Número!***`);
 let channel = message.mentions.channels.first();
 if (!channel)
 return message.channel.send(
 `  |  ***O canal não foi encontrado!***`
 );
 let prize = args.slice(2).join(" ");
 if (!prize) return message.channel.send(`  |  ***Utilize desta maneira! \`\`!sorteio <Tempo> <#Canal> <Prêmio>\`\`***.`);
 message.channel.send(`*Sorteio criado em ${channel}!*`);
 let Embed = new MessageEmbed()
 .setTitle(`  |  *Sorteio!*`)
 .setDescription(
 `*O Usuário ${message.author} Criou um Sorteio de **${prize}**!*\n\n⌠<a:aaa:784499492938186752>⌡ ┆ ·   ***Autor:*** ${message.author}\n⌠<a:aaa:784499492938186752>⌡ ┆ ·   ***Prêmio:*** \`${prize}\`\n\n*Use (<a:aaa:784499492938186752>) para participar!*`
 )
 .setFooter(`  ·  Acabará em`)
 .setTimestamp(Date.now() + ms(args[0]))
 .setColor(`#FF87E1`);
 let m = await channel.send(Embed);
 m.react(`784499492938186752`);
 setTimeout(() => {
 if (m.reactions.cache.get(`784499492938186752`).count <= 1) {
 return message.channel.send(
 `  |  ***No sorteio não houve pessoas suficientes para eu sortear!***`
 );
 }

 let winner = m.reactions.cache
 .get(`771411472277569547`)
 .users.cache.filter((u) => !u.bot)
 .random();
 channel.send(
 `*O Vencedor do Sorteio de **${prize}** foi...  ${winner}*`
 );
 }, ms(args[0]));
 },
};