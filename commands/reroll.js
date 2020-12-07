module.exports = {
    name: "reroll",
    aliases: ["nuevo-ganador"],
    category: "sorteos",
    owners: false,
    desc: "Has que haya otro ganador",
    usage: "<prefix>giveaway <id>",
	execute: async(client, message, args) =>{
    let { GiveawayReroll } = require("../utils/giveaway.js")
    let one = args[0]
    let second = args[1]
    GiveawayReroll(one, second, message)
        }
}