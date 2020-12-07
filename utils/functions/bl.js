let bl = require("../../utils/models/blacklist.js")

class BlackManager{
	constructor() {
		this.has = async function has(userid) {
        let x = await bl.findOne({userID: userid})
		if(x) return true
		if(x == null) return false
		}
		this.set = async function set(userid, razon, me) {
		await bl.create({
		userID: userid,
		reason: razon,
		addedBy: me,
		userAdded: Date.now()
		})
		return 'Date Created!'
		}
		this.get = async function get(userid) {
		let x = await bl.findOne({userID: userid})
		if(x) return x
		if(x == null) throw new TypeError("No existe el usuario en la BL")
		}
		this.delete = async function remove(userid) {
		let x = await bl.findOneAndDelete({userID: userid})
		if(x) {
		return true
		}
		if(x == null) throw new TypeError("No existe el usuario en la BL")
		}
		}
	}

module.exports = BlackManager