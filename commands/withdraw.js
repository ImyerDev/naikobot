module.exports = {
    name: "withdraw",
    aliases: ["retirar"],
    category: "economia",
    owners: false,
    desc: "Retira el dinero",
    usage: "<prefix>bank <number>",
    execute: async (client, message, args) => {
        
let Dinero = new (require("megadb")).crearDB("money")
let dinero = parseInt(args[0])

if(isNaN(dinero) || !dinero) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el dinero que quieres quedarte en la billetera")

const getDineroMoney = await Dinero.get(`${message.guild.id}.${message.author.id}.money`)
const getDineroBank = await Dinero.get(`${message.guild.id}.${message.author.id}.banco`)
const getDineroCurrency = await Dinero.get(`${message.guild.id}.currency`)

if(getDineroBank < dinero) return message.channel.send(`<a:deny:718249526217015338> | No puedes retirar el dinero que no tienes en el banco`)

Dinero.add(`${message.guild.id}.${message.author.id}.money`, dinero)

if(!Dinero.has(`${message.guild.id}.${message.author.id}.banco`)){

  Dinero.set(`${message.guild.id}.${message.author.id}.banco`, dinero)

} else {

  Dinero.restar(`${message.guild.id}.${message.author.id}.banco`, dinero)

}

message.channel.send(`<a:approve:734933612906020974> | Has retirado \`${dinero}\`${getDineroCurrency} en el banco`)
    
  }
}