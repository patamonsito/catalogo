const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenusSchema = new Schema({
  // Informacion General
    Modo: String,
    Menu: Array
  }, {timestamps: true});


module.exports = mongoose.model('Menus', MenusSchema);