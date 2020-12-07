module.exports = {
 name: "trash",
 aliases: ["basura"],
 category: "imagen",
 owners: false,
 desc: "Obten una imagen tirando a tal mencionado a la basura",
 usage: "<prefix>trash <mentioned>",
 execute: async(client, message, args) =>{
                if(!message.mentions.users.first()) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de mencionar a alguien`)
                if(message.author.id == message.mentions.users.first().id) return message.channel.send(`${require("../utils/emojis/deny.js")} | No puedes tirarte tu mismo a la basura... o si?`)
                let img = new (require("discord.js")).MessageAttachment(`https://api.alexflipnote.dev/trash?face=${message.author.avatarURL()}&trash=${message.mentions.users.first().avatarURL()}`, "trash.png")
message.channel.send(`Tiempo: ${(Math.floor(Date.now() - message.createdTimestamp) / 1000).toFixed(2)} segundos`, img)
        }
}