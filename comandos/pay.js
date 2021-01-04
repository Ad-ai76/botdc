const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {



    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.author.id}`)


    if (!user) {
        return message.channel.send('você se esqueceu de mencionar alguém.')
    }
    if (!args[1]) {
        return message.channel.send('Especifique um valor.')
    }
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Dinheiro negativo não pode ser pago.')
    }

    if (member < args[1]) {
        return message.channel.send(`Isso é mais dinheiro do que você tem em seu saldo. tente novamente.`)
    }

    message.channel.send(`${message.author.tag}, Você pagou com sucesso ${user.user.username} ${args[1]}$.`)
    db.add(`money_${user.id}`, args[1])
    db.subtract(`money_${message.author.id}`, args[1])




}