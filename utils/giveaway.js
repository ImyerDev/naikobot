let ms = require("ms")
module.exports = {
GiveawayStart: async(win, time, message) =>{
if(!win) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner algo a ganar`)
if(!time[1]) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un tiempo para que el sorteo finalize en ese tiempo`)
if(time[1].includes("d")) return message.channel.send(`${require("../utils/emojis/deny.js")} | El tiempo no debe de ser de mas de un dia`)
if(!ms(time[1]) > 20 && parseInt(ms(time[1]) > 20)) return message.channel.send(`${require("../utils/emojis/deny.js")} | El tiempo debe de ser menos de 20 segundos`)
if(!isNaN(ms(time[0]))) return message.channel.send(`${require("../utils/emojis/deny.js")} | El tiempo debe de ser un numero`)
message.channel.send(require("../utils/emojis/giveawayemoji.js")+' | Reacciona y podrás ganar: **'+win.split(" | ")[0]+'**').then(m => {
setTimeout(() => {
message.channel.messages.fetch(m.id).then(async msg => {
let player = await msg.reactions.cache.get("🎉").users.cache.filter(q => !q.bot).random()
if(!player) return message.channel.send(`${require("../utils/emojis/deny.js")} | Nadie a ganado en este sorteo`)
message.channel.send(`${require("../utils/emojis/giveawayemoji.js")} | Felicidades ${player.username}, ganaste: **${win.split(" | ")[0]}**`)
});
}, ms(time[1]) * 1000);
m.react('🎉')
});
},
GiveawayEnd: async(id1, id2, message) =>{
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes tener el permiso **ADMINISTRATOR** para poder hacer end a un sorteo`)
if(!id1) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner una id de un sorteo`)
if(!id2) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner una id de el canal donde se creo el sorteo`)
if(!message.guild.channels.cache.get(id2)) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner la id de un sorteo existente.`)
message.guild.channels.cache.get(id2).messages.cache.get(id1).then(m =>{
message.channel.send(`${require("../utils/emojis/approve.js")} | El sorteo se terminara en 12 segundos`)
m.edit(`${require("../utils/emojis/giveawayemoji.js")} |Sorteo terminado!`, {timeout: 12000})
})
},
GiveawayReroll: async(id1, id2, message) =>{
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes tener el permiso **ADMINISTRATOR** para poder hacer reroll a un sorteo`)
if(!id1) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner una id de un sorteo`)
if(!id2) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner una id de el canal donde se creo el sorteo`)
if(!message.guild.channels.cache.get(id2).messages.cache.has(id1)) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner la id de un sorteo existente.`)
message.guild.channels.cache.get(id2).messages.cache.get(id1).then(async m =>{
let forceplayer = await m.reactions.cache.get("🎉").users.cache.filter(q => !q.bot).random()
if(!forceplayer) return message.channel.send(`${require("../utils/emojis/deny.js")} | Hubo un error cuando se forzaba el nuevo ganador, intentalo de nuevo`)
message.channel.send(`${require("../utils/emojis/approve.js")} | El nuevo ganador del sorteo se eligira en 12 segundos`)
m.edit(`${require("../utils/emojis/giveawayemoji.js")} |El nuevo ganador del sorteo es ${forceplayer.username}!`, {timeout: 12000})
})  
}
}