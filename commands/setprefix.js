let Prefix = new (require("../utils/functions/prefix.js"))()

module.exports = {
 name: "setprefix",
 aliases: ["establecer-prefix", "establecer-prefijo"],
 category: "configuracion",
 owners: false,
 desc: "Mira los comandos de Naiko",
 usage: "<prefix>setprefix <new_prefix>",
 execute: async(client, message, args) =>{
if(!message.member.hasPermission("MANAGE_GUILD") || !message.member.hasPermission("NAIKO_DEVELOPER")) return message.channel.send("<a:deny:718249526217015338> | Debes de tener el permiso **MANAGE_GUILD** para hacer esta accion")
if(!args[0]) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el nuevo prefix")
if(args[0].length > 3) return message.channel.send("<a:deny:718249526217015338> | Un prefix no puede tener mas de 3 de lengitud")
if(Prefix.currentPrefix(client, message.guild.id) == "-") {
message.channel.send("<a:approve:734933612906020974> | Ahora el nuevo prefix es: `"+args[0]+"`", {allowedMentions: {parse: []}})
Prefix.setPrefix(client, message.guild.id, args[0])
}
Prefix.deletePrefix(client, message.guild.id)
message.channel.send("<a:approve:734933612906020974> | Ahora el nuevo prefix es: `"+args[0]+"`", {allowedMentions: {parse: []}})
Prefix.setPrefix(client, message.guild.id, args[0])
}
}
