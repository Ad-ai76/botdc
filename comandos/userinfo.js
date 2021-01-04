const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "user-info",
    category: "extra",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = " online";
                break;
            case "dnd":
                status = " dnd";
                break;
            case "idle":
                status = " idle";
                break;
            case "offline":
                status = " offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} Status`)
            .setColor(`#303136`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nome: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "TAG",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: "Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Atividade: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `O usuário não está jogando!`,
                    inline: true
                },
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Data De Criação',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Data De Entrada: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
            )

        await message.channel.send(embed)
    }
}