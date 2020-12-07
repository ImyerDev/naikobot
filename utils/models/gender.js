const mongoose = require("mongoose");

const GenderSchema = new mongoose.Schema({
  userID: { type: String },
  guildID: { type: String },
  gender: { type: Number, default: 0 }
});

module.exports = mongoose.model('Generos', GenderSchema);