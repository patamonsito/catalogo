const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelosSchema = new Schema({
  // Informacion General
  Id: Number,
  Modelo: String,
  AñoI: Number,
  AñoT: Number,
  Años: Array,
  Img: String
}, {timestamps: true});


module.exports = mongoose.model('Modelos', ModelosSchema);