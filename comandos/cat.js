const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Random = require("srod-v2");

module.exports = {
    name: "cat",
    category: "image",
    description: "Return A Cat Image!",
    usage: "Cat",
    run: async (client, message, args) => {

        //Start

        let Data = await Random.GetAnimalImage(`Cat`, Color);

        return message.channel.send(Data);

        //End

    }
};