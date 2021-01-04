const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
  var string = args.join(" ");
    message.delete()
 
const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
        .setTitle("💤 Ausência 💤")
        .setDescription(` O usuário ${message.author} está ausente`)
        .addField("MOTIVO:", `**${string}**`)

        message.channel.send(embed);        
 
                            
    
    
 
}
 
exports.help = {
    name: "afk"
}