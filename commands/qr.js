module.exports = {
  name: 'qr',
  aliases: ["crear-qr", "create-qr"],
  category: 'utilidad',
  owners: false,
  desc: 'Devuelve cualquier QR',
  usage: '<prefix>qr',
  execute: async(client, message, args) =>{
	let deny = require("../utils/emojis/deny.js")
    let text = args.join(" ");
    if(!text) return message.channel.send(`${deny} | Debes de poner un texto`)
    message.channel.send(new (require("discord.js")).MessageAttachment(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURI(text)}`, 'qr.png'))
  }
  }