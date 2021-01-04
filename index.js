const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`[ \u001b[93mSISTEMA\u001b[39m ] Pong! Recebido as: ${ping.getUTCHours()} horas, ${ping.getUTCMinutes()} minutos, ${ping.getUTCSeconds()} segundos.`);
  response.sendStatus(200);
});
client.login(config.token);

 
client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
if (db.get(`blacklist_${message.author.id}`) == 'sim') return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
if (db.get(`blacklist_${message.author.id}`) == 'sim') return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./src/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on('messageDelete', message => {
  const db = require('quick.db')
  if(message.channel.type == 'dm') return;
  let server3 = db.get(`server2_${message.guild.id}`)
  if(server3 != message.guild.id) return;
  let valor = db.get(`delchannel_${message.guild.id}`)
        var channel2 = client.channels.cache.get(valor)
if(message.channel.id == channel2) return;
        if(channel2) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Mensagem deletada')
                .addField('Author', `${message.author.tag} (${message.author.id}) `, true)
                .addField('Canal', `${message.channel.name} (${message.channel.id})`, true)
                .setDescription(message.content)
                .setTimestamp();
         channel2.send(embed);
      }
});

const guildInvites = new Map();

client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));
client.on('ready', () => {
    client.guilds.cache.forEach(guild => {
      if(!guild.me.hasPermission('MANAGE_GUILD')) return;
        guild.fetchInvites()
            .then(invites => guildInvites.set(guild.id, invites))
    });
});

client.on('guildMemberAdd', async member => {
    const db = require('quick.db')
    var invchannel = db.get(`invchannel_${member.guild.id}`)
    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try {
        const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
      let invs = db.get(`invs3_${usedInvite.inviter.id}_${member.guild.id}`)
     let invs2 = invs + Number(1)
db.set(`invs3_${usedInvite.inviter.id}_${member.guild.id}`, invs2)
if(!invs) invs  = 0;
        const embed = new Discord.MessageEmbed()
            .setDescription(`${member.user.tag} entrou, por ${usedInvite.inviter.tag} (${usedInvite.inviter.id})\nNúmero de usos: ${usedInvite.uses}\nAgora ele tem ${invs2} invites`)
            .setTimestamp()
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === `${invchannel}`);
        if(welcomeChannel) {
            welcomeChannel.send(embed)
        }
    } catch(err) {
        console.log(`[ \u001b[91mSISTEMA\u001b[39m ] Um error aconteceu no sistema de invites, error: ${err}`)
    }
});

client.on("message", async (message) => {
if(message.channel.type == 'dm') return;
  const db = require("quick.db")
  let a = db.get(`invite_${message.guild.id}`)
  if(!a) a = "no";
  if(a == "no") return;
let antiinvite = message.content.toLowerCase()
let alerta = `**| Ei! ${message.author}, convite de servidores são proibidos aqui!**`
if(message.member.hasPermission("MANAGE_GUILD")) alerta = `** | Ei! ${message.author}, convites de servidores são proibidos aqui!\n | Psiu, Você pode desativar com !antilink off.**`
if(message.member.hasPermission("ADMINISTRATOR")) return;
if(antiinvite.includes("discord.gg")) {
message.channel.send(alerta)
message.delete()
}
})

client.on("guildMemberAdd", async (member) => {

  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "coroa");

  let guild = db.get("792118279531397180")
  if (guild === null) return;

  let channel = db.get(`792120934567116810`)
  if (channel === null) return;

  let text = await new Discord.MessageEmbed()
    .setColor("#7c2ae8")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(` bem-vindo `)
    .setImage("")
    .setDescription(`**${member.user}** **seja muito 
 bem-vindo(a) ao ${guild.name}**! 
 *neste momento que você entrou estamos com
 **${member.guild.memberCount}** membros* 
 **divirta-se conosco!** `)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setFooter("Boas vindas")
    .setTimestamp();

  client.channels.cache.get(channel).send(text)

  member.roles.add("792120904519122976"); // Member role.
  member.send(`${member.user} muito obrigado por ter entrando no servidor espero que se divirta-se `)
})

client.on('ready', () => {
	let activities = [
			`Utilize ${config.prefix}help para Ajuda!`,
			`Fui Desenvolvido pelo Tom�sxD`,
			`Sou Um Bot Open Source`
		],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: "PLAYING",
        url: "https://www.twitch.tv/Snwxz"
			}),
		1000 * 3
	);
	client.user.setStatus('online').catch(console.error);
	console.log('online');
});


client.on("guildMemberAdd", async member => {
const db = require("quick.db")
let roleBots = db.get(`autoroleB_${member.guild.id}`)
let roleMembers = db.get(`autoroleM_${member.guild.id}`)
if(member.user.bot) {
  member.roles.add(roleBots) 
} else {
 member.roles.add(roleMembers)
}
 })
