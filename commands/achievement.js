module.exports = {
 name: "achievement",
 aliases: ["logro"],
 category: "imagen",
 owners: false,
 desc: "Obten un logro con tal texto",
 usage: "<prefix>user",
 execute: async(client, message, args) =>{
                if(!args.join(" ")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un texto`)
                let achievement = new (require("discord.js")).MessageAttachment(`https://api.alexflipnote.dev/achievement?text=${args.join(" ")}`, "achievement.png")
message.channel.send(`Tiempo: ${(Math.floor(Date.now() - message.createdTimestamp) / 1000).toFixed(2)} segundos`, achievement)
        }
}