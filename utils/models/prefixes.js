let mongoose = require("mongoose");

let PrefixSchema = new mongoose.Schema({
    guildID: { type: String },
    prefix: { type: String , default: "-" },
});

let Prefixes = module.exports = mongoose.model('Prefijos', PrefixSchema);