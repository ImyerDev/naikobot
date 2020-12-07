let Discord = require("discord.js")
let { check } = require("../utils/checkURL.js")
module.exports = {
 Screenshare: async(url, message) =>{
 if(!url) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un link`)

 try {
 if(!url.startsWith("https://")) {
 url = "https://"+url
 }else if(!url.startsWith("http://")) {
 url = "http://"+url
 }
 let isNSFW = await check(url) ? true : false
 let Checkin = await check(url)
 let isPageIP = await false
 if(Checkin == "yes") isPageIP = await true
 let noChannelNSFW = await message.channel.nsfw ? true : false
 if(isNSFW && !noChannelNSFW) return message.channel.send(`${require("../utils/emojis/deny.js")} | No puedes ver paginas con contenido de adultos en un canal no NSFW.`)
 if(isPageIP) return message.channel.send(`${require("../utils/emojis/deny.js")} | No puedes ver paginas para saber tu IP, esta prohibido.`)
 let screen = new Discord.MessageAttachment(`https://api.apiflash.com/v1/urltoimage?access_key=${process.env.API}&url=${encodeURI(url)}`, `screen.png`)
 
 
 message.channel.send(`Tiempo: ${(Math.floor(Date.now() - message.createdTimestamp) / 1000).toFixed(2)} segundos`, screen)
 } catch(e) {
 console.log(e)
 }

 }
}