module.exports = {
    name: "start",
    aliases: ["sorteo"],
    category: "sorteos",
    owners: false,
    desc: "Crea un sorteo facilmente",
    usage: "<prefix>start <towin> | <time>",
	execute: async(client, message, args) =>{
    let { GiveawayStart } = require("../utils/giveaway.js")
    let one = args.join(" ")
    let second = one.split(" | ")
    GiveawayStart(one, second, message)
        }
}