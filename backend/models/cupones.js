const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CuponesSchema = new Schema({
  // Informacion General
    Active: {type: Boolean, default: false },
    Descripcion: String
  }, {timestamps: true});


module.exports = mongoose.model('Cupones', CuponesSchema);