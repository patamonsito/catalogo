const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SlidersSchema = new Schema({
  // Informacion General
    Descripcion: String,
    Url: String
}, {timestamps: true});


module.exports = mongoose.model('Sliders', SlidersSchema);