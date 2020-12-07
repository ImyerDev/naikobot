module.exports = async(client, guild) =>{
 let serversFiltered = await client.guilds.cache.filter(q => q.ownerID == guild.ownerID).map(q => q.name)
if(serversFiltered = []) return;
if(guild.name in serversFiltered) {
let channelRandom = await client.guilds.cache.get(guild.id).channels.cache.random()
let mensaje = channelRandom.send(`${require("../utils/emojis/deny.js")} | Este servidor a sido detectado como **servidor falso** por nuestro sistema **anti false servers**, me tendre que ir de este servidor.`)
mensaje
guild.leave()
return;
}
}