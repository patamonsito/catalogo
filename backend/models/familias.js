const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FamiliasSchema = new Schema({
  // Informacion General
  Descripcion: String,
  Img: String,
  active: Boolean
}, {timestamps: true});


module.exports = mongoose.model('Familias', FamiliasSchema);