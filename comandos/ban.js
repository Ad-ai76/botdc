const Discord = require("discord.js");
const config = require('../config.json')
exports.run = (bot, message, args) => {
let prefix = config.prefix

    var member = message.mentions.members.first();
    let error = new Discord.MessageEmbed()
    .setDescription(`Desculpe ${message.author}, você precisa da permissão banir membros`)
    .setColor(`#D60C0C`)
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send (error)
    if (!member) return message.reply(`Tente ${prefix}ban **usuário** motivo.`)
    if (!member === message.member) return message.reply(`Você não pode banir você.`)
    if(!member.bannable) return message.reply("Eu não consigo fazer isso.")

    var reason = args.slice(1).join(" ");
    if (!reason) return message.reply(`Tente ${prefix}ban @usuário **motivo**.`)

        
       message.channel.send(`Clique em <a:Yes2:740764723179683940> para banir ${member.user.username}!`).then(msg => {
        msg.react("740764723179683940")
          
        let filtro = (reaction, usuario) => reaction.emoji.name === "Yes2" && usuario.id === message.author.id;
         let coletor = msg.createReactionCollector(filtro, {max: 1})
        
        coletor.on("collect", cp => {
           let embed = new Discord.MessageEmbed()
          .setTitle(`${member.user.username} banido`)
          .setDescription(`\Usuário: \`${member.user.username}\`\nMotivo: **${reason}**`)
          message.channel.send(embed);
          cp.remove(message.author.id);
          member.ban();
        })
    })
}

exports.help = {
    name: 'ban'
}