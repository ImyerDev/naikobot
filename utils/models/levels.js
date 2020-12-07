const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema({
  userID: { 
  type: String 
},
  guildID: { 
  type: String 
},
  xp: {
  type: Number, 
  default: 0 
},
  nivel: { 
  type: Number, 
  default: 0 
}
});

const Levels = module.exports = mongoose.model('Niveles', LevelSchema);