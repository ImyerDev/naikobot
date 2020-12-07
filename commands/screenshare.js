module.exports = {
  name: 'screenshare',
  aliases: ["ss", "screenshareofpage", "screenpage", "sp"],
  category: 'imagen',
  owners: false,
  desc: 'Link a imagen',
  usage: '<prefix>screenshare <url>',
  execute: async(client, message, args) =>{
  let { Screenshare } = require("../utils/screenshare.js")
  Screenshare(args[0], message)
  }
}