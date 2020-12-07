module.exports = {
	name: "mute",
	aliases: [],
	category: "moderacion",
	owners: false,
	desc: "Silencia a un usuario con su razon",
	usage: "<prefix>mute <mentioned> <time> <reason>",
	execute: async(client, message, args) =>{
        const Discord = require("discord.js")
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de tener el permiso **MANAGE_MESSAGES** para silenciar usuarios de tu servidor`)
        const user = message.mentions.users.first()
        const time = args[1]
        const reason = args.slice(2).join(" ")
        const ms = require("ms")
        if(!user) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de mencionar a el usuario que quieres silenciar de tu servidor`)
        if(user.id == message.author.id) return message.channel.send(`${require("../utils/emojis/deny.js")} | No te puedes silenciar a ti mismo`)
        if(!time) return message.channel.send(`${require("./utils/emojis/deny.js")} | Debes de poner un tiempo definido para que el usuario se desmutee en ese tiempo`)
        if(ms(time).includes("d")) return message.channel.send(`${require("./utils/emojis/deny.js")} | El tiempo no debe ser mas de un dia, año ni semana`)
        if(ms(time).includes("y")) return message.channel.send(`${require("./utils/emojis/deny.js")} | El tiempo no debe ser mas de un dia, año ni semana`)
        if(ms(time).includes("w")) return message.channel.send(`${require("./utils/emojis/deny.js")} | El tiempo no debe ser mas de un dia, año ni semana`)
        let muterole;
        if (message.guild.roles.cache.find(x => x.name == "Muted")) {
        muterole = message.guild.roles.cache.find(x => x.name == "Muted").id
        }else{
        const createrol = await message.guild.roles.create({
            data: {
                name: 'Muted',
            }
        })
        }
        const embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setDescription(message.guild.name+"'s modlogs")
        .addField("Usuario:", user)
        .addField("Tipo:", "Muteo")
        .addField("Razon:", reason.slice(22))
        .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
        message.channel.send(embed)
        user.roles.add(muterole)
        setTimeout(function() {
        user.roles.delete(muterole)
        }, ms(time))

}
}