const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {

  run: async function (client, message, args)  {
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.size
    const usersize = client.users.size

    const msg = await message.channel.send(`Carregando informações...`)




    const embed = new Discord.MessageEmbed()
      .setColor('#e3964d')
      .setThumbnail(botAvatar)
      .setAuthor('🤖 Minhas informações')
      .addField('**Meu ID**', client.user.id)
      .addField('**Servidores**', `${client.guilds.cache.size}`, true)
      .addField('**<:labgreen_usuarios:784518793250471996>Usuários**', `${client.users.cache.size}`, inline, )
      .addField('**Fui Criado**', formatDate('DD/MM/YYYY, às HH:mm:ss', date), true)
      .addField('**LINKS**', '[Server De Suporte](https://discord.gg/8CgWHvnC3M)   |  ') 
      .addField(`** <:labgreen_i:784499564425510935> | informações:**`, `**⇾ Linguagem: JavaScript<:labgreen_nodejs:784796811239620615>
      ⇾ Host: Repl.it<:labgreen_repl:784525433524715521>
      ⇾ <:labgreen_discordjs:782737634086617148>Livraria: [Discord.js](https://www.discord.js.org/)
      ⇾ <:labgreen_ssd:784078638827700295>Banco de Dados: [Quick.db](https://quickdb.js.org/)**`, true)
      
      .addField(`**<a:ping:737078567699087376> | Ping**`, `⇾ <:labgreen_online:782754606354399263>Ping da API: \`${client.ws.ping}ms\`
       ⇾ <:labgreen_online:782754606354399263>Ping do Servidor: \`${msg.createdTimestamp -
      message.createdTimestamp}ms\``)
      .addField(`**<:labgreen_status:784499307545755679> Status:**`, `Online`, true)
      .setFooter(`2020 © ${client.user.username}.`)
      .setTimestamp()

    if (client.user.presence.status) {
      embed.addField(
        '**<:labgreen_Developer:784495236146659349> Criada pelo:**',
`<@!585505421544914969>`,
        inline,
        true
      )
    }

   msg.edit(embed)
   console.log('alguem usou o comando de botinfo')
  },

  conf: {},

  get help () {
    return {
      name: 'botinfo',
      category: 'Info',
      description: 'Mostra informações do bot.',
      usage: 'botinfo'
    }
  }
}

function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}