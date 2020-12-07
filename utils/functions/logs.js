let Log = require("../../utils/models/logs.js")

class LogManager{
	constructor() {
    this.has = async function has(guildid) {
    let x = await Log.findOne({guildID: guildid})
	if(x) {
    return true
	}
	if(x == null) {
	return false
	}
	}
	this.get = async function get(guildid) {
	let x = await Log.findOne({guildID: guildid})
	if(x) return x.channelID
	if(x == null) return null
	}
	this.set = async function set(guildid, channelid) {
	new Log({
	guildID: guildid,
	channelID: channelid
	})
	}
	this.delete = async function remove(guildid) {
	let x = Log.findOneAndDelete({guildID: guildid})
	if(x) return true
	if(x == null) return false
	}
	}
}

module.exports = LogManager