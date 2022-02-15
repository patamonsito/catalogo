const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
  // Informacion General
  Importadora: String,
  CodigoImportadora: String,
  CodigoProducto: String,
  OEM: String,
  Producto: String,
  Descripcion: String,
  Origen: String,
  Marca: String,
  MarcaVehiculo: String,
  Modelo: String,
  AñoI: Number,
  AñoT: Number,
  Años: Array,
  Stock: Schema.Types.Mixed,
  Oferta: Boolean,
  Descuento: Number,
  Date: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true});


module.exports = mongoose.model('Productos', ProductosSchema);