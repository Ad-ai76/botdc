const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Random = require("srod-v2");

module.exports = {
    name: "dog",
    category: "image",
    description: "Return A Dog Image!",
    usage: "Dog",
    run: async (client, message, args) => {

        //Start

        let Data = await Random.GetAnimalImage(`Dog`, Color);

        return message.channel.send(Data);

        //End

    }
};