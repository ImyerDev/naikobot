module.exports = {
  name: "ascii",
  aliases: [],
  category: 'utilidad',
  owners: false,
  desc: 'Obten un texto en codigo ascii',
  usage: '<prefix>ascii <text>',
  execute: async(client, message, args) =>{
  let { textSync } = require("figlet")
  if(!args.join(" ")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner el texto a ascii`)
  message.channel.send(textSync(args.join(" ")), {code: ""})
}
}