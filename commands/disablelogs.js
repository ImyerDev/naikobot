let logs = new (require("../utils/functions/logs.js"))()

module.exports = {
 name: "disablelogs",
 aliases: ["desactivar-logs", "desactivar-registros"],
 category: "configuracion",
 owners: false,
 desc: "Desactiva un canal de registros/logs",
 usage: "<prefix>disablelogs",
 execute: async(client, message, args) =>{
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<a:deny:718249526217015338> | Debes de tener el permiso **MANAGE_GUILD** para hacer esta accion")
if(!logs.has(message.guild.id)) return message.channel.send("<a:deny:718249526217015338> | No encuentro ningun canal de logs, para activar los canales de logs usa `setlogs`")
logs.delete(message.guild.id)
message.channel.send("<a:approve:734933612906020974> | Elimine correctamente el canal de logs")
}
}