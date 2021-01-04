const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "daily",
    description: "Receive a daily award of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
    let amount = Math.floor(Math.random() * 4000) + 1000;

        let daily = await db.fetch(`daily_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
        } else {
            db.add(`money_${user.id}`, amount);
            db.set(`daily_${user.id}`, Date.now());

            message.channel.send(`Successfully added ${amount} coins to your account`)
        }
    }
}