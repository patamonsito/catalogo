const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    Nombre: String,
    Apellido: String,
    Rut: { type: String, unique: true, uppercase: true },
    Direccion: String,
    Telefono: String,
    Correo: { type: String, unique: true, lowercase: true },
    Contraseña: {type: String },
    Avatar: { type: String, default: '/uploads/default_avatar.jpg' },
    Autos: { type: Array, default: [] },
    Favoritos: { type: Array, default: [] },
    CuponesDisponibles: { type: Array, default: [] },
    CuponesUsados: { type: Array, default: [] },
    Compras: {type: Array, default: [] },
    LastLogin: Date,
    Bloqueado: { type: Boolean, default: false },
    BloqRazon: String,
    Token: String,
    CodeRef: String
}, {timestamps: true});


module.exports = mongoose.model('Usuarios', UsuariosSchema);