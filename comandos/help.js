const Discord = require("discord.js")
exports.run = (bot, message, argumentos, arg_texto, chat) => {
  let member = message.author
 
  const ajuda = new Discord.MessageEmbed()
    .setColor("#ED186A")
    .setTitle("Painel De Comandos")
    .setDescription(`> Olá ${message.author}, Eu me chamo MineBS, sou um bot simples em js.
 
 
> Comandos
 
 
<a:labgreen_numero1gif:784735734140895232> › Comandos de administração
<a:labgreen_numero2gif:784735799274504202> › Comandos de diversão
<a:labgreen_numero3gif:784735832216436757> › Comandos de economia
<a:labgreen_numero4gif:784735864885477418> Comandos de informação/setaves
<a:abc:789139412738113579> › Volta
`)
 
   	.setImage('')
   	.setFooter(`Comando solicitado por ${message.member.displayName}`,``)   
 
  const ajuda2 = new Discord.MessageEmbed()
  .setColor('#303136')
  .setDescription(` | Olá ${message.author.tag}, enviei meus comandos em suas mensagens privadas.`)
   // message.channel.send(ajuda2)
  message.channel.send(ajuda).then(msg => { 
  	msg.react('784735734140895232').then(r => {
 
      msg.react('784735799274504202').then(r => {
    msg.react('784735832216436757').then(r => {
       msg.react('784735864885477418').then(r => {
       		msg.react('789139412738113579').then(r => {
       		})
        })
      })
    })
  })
 
    const infosFilter = (reaction, user) => reaction.emoji.id === '784735864885477418' && user.id === message.author.id;
    const voltaFilter = (reaction, user) => reaction.emoji.id === '789139412738113579' && user.id === message.author.id;
    const ecomyFilter = (reaction, user) => reaction.emoji.id === '784735832216436757' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.id === `784735734140895232` && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.id === '784735799274504202' && user.id === message.author.id;
 
    const infos = msg.createReactionCollector(infosFilter);
      const volta = msg.createReactionCollector(voltaFilter);
 
      const ecomy = msg.createReactionCollector(ecomyFilter);
       const adm = msg.createReactionCollector(admFilter);
    const fun = msg.createReactionCollector(funFilter);
 
 
 
    infos.on('collect', r2 => {
 
      ajuda.setTitle("Comandos informativos!")
      ajuda.setDescription(`> Informações
 
╭╶╶╶╶╶╶╶╶╶╶╶╶╶
│/userinfo - veja a informaçao do membro
│/serverinfo - ver as informaçoes do chat
│/autorolebot - cargo automatico dos bots
│/autorolemembers - cargo automatico dos Membros
│/regra - crie regras em estantes
│/invites - Veja os seus invites
│/lembrete - te lembrar de algo
│/servericon - ver o ícon do seu servidor
│/setcanallogs - sete o canal de Log
│/setcanlnvtes - sete o canal de invites 
╰╶╶╶╶╶╶╶╶╶╶╶╶
`)
      msg.edit(ajuda)      
    })
 
 
    ecomy.on('collect', r2 => {
 
      ajuda.setTitle("Comandos de Economia")
      ajuda.setDescription(`> economia
╭╶╶╶╶╶╶╶╶╶╶╶╶
│/daily - pegue seu diario
│/dep - Deposte
│/sacar - saque
│/atm - quanto eu tenho
│/roubar - roube
│/conflipbet - aposte
╰╶╶╶╶╶╶╶╶╶╶╶
`)
      msg.edit(ajuda)
 
    })
    adm.on('collect', r2 => {
 
      ajuda.setTitle("Comandos de administração!")
      ajuda.setDescription(`> Administração
 
╭╶╶╶╶╶╶╶╶╶╶╶╶╶
│/Ban - Da ban em um usuário
│/clear - limpar o chat
│/kick - espusar um usuário
│/lock - bloquear um chat
│/unlock - desbloquear um chat
│/say - fazer o bot falar
│/embed - fazer o bot fala em embed
│!
╰╶╶╶╶╶╶╶╶╶╶╶╶╶
`)
      msg.edit(ajuda)
 
    })
 
    fun.on('collect', r2 => {
 
      ajuda.setTitle("Comandos de diversão!")
      ajuda.setDescription(`> diversão
 
╭╶╶╶╶╶╶╶╶╶╶╶╶
│/8ball - faça uma pergunta
│/ascii - vou fazer um texto com ., 
│/bigtext - fazer um texto com emojis
│/cal - 1 + 1 = 11
│/corrida - fazer uma disputa com um amigo
│/fake - fazer uma trolagem com seu amigo
│/goularte - fazer o Goularte fala 
│/hug - abraça alguém
│/jokempo - pedra, papel e tesoura
│/kiss - beija alguém
│/laranjo - fazer o laranjo falar
│/slap - de um tapa em alguem
│/primeirapalavra - a primeira palavra de um bebê
│/ship - será que o amor tá no ar
╰╶╶╶╶╶╶╶╶╶╶╶╶╶
`)
      msg.edit(ajuda)
 
        volta.on('collect', r2 => {
 
 
    ajuda.setTitle("Painel De Comandos")
    ajuda.setDescription(`> Olá ${message.author}, Eu me chamo MineBS, sou um bot simples em js.
 
 
> Comandos
 
 
<a:labgreen_numero1gif:784735734140895232> › Comandos de administração
<a:labgreen_numero2gif:784735799274504202> › Comandos de diversão
<a:labgreen_numero3gif:784735832216436757> › Comandos de economia
<a:labgreen_numero4gif:784735864885477418> Comandos de informação/setaves
<a:abc:789139412738113579> › Volta
`)
       msg.edit(ajuda)
})
 
    })
  })  
} 