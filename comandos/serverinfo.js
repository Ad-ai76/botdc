const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const date = message.guild.createdAt
    const joined = message.member.joinedAt

    const region = {
      brazil: ':flag_br: Brazil'
    }

    const embed = new Discord.MessageEmbed()
      .setColor(client.displayHexColor === 'RANDOM' ? '#ffffff' : client.displayHexColor)
      .setAuthor('🔍 Informações do Servido')
      .addField('**Nome**', message.guild.name, true)
      .addField('<:labgreen_identidade:784078452486701056>**ID**', message.guild.id, true)
      .addField('<a:labgreen_coroa2gif:784797897962160208>**Dono(a)**', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField('**Região**', region[message.guild.region], true)
      .addField(`<:labgreen_usuarios:784518793250471996>**Humanos: ${message.guild.members.cache.filter(member => !member.user.bot).size}**`, `🤖**Robos: ${message.guild.members.cache.filter(member => member.user.bot).size}**`, true)
      .addField('<:labgreen_canal:784520940485607455>**Canais**', message.guild.channels.cache.size, true)
      .addField('**Cargos**', message.guild.roles.cache.size, true)
      .addField('<:labgreen_setaverde:784078750152917002>**Fundado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('<:labgreen_setaverde:784078750152917002>**Você Juntou-se em**', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))
      .setFooter('2020 © Lab Amarelo.')
      .setTimestamp()

    message.channel.send(embed)
  },
  conf: {},

  get help () {
    return {
      name: 'serverinfo',
      category: 'Info',
      description: 'Informação sobre o servidor',
      usage: 'serverinfo'
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