module.exports = {
    name: "end",
    aliases: ["finalizar"],
    category: "sorteos",
    owners: false,
    desc: "Finaliza un sorteo facilmente",
    usage: "<prefix>end <id>",
	execute: async(client, message, args) =>{
    let { GiveawayEnd } = require("../utils/giveaway.js")
    let one = args[0]
    let second = args[1]
    GiveawayEnd(one, second, message)
        }
}