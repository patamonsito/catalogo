const Usuarios = require("../models/usuarios");
const Modelos = require("../models/modelos");
const Familias = require("../models/familias");
const Menus = require("../models/menus");
const Sliders = require("../models/sliders");
const Productos = require("../models/productos");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { env } = require("process");
require("dotenv").config();

module.exports = class API {
    // CRUD REGISTRAR USUARIO
    static async CREATE_USER(req, res){
        const Datos = req.body;

        //Activar cuando se requiera una imagen
        // const Imagename = req.file.filename ? req.file.filename : '';
        
        // Datos.Avatar = Imagename;

        const salt = await bcrypt.genSalt(10);

        console.log(req.body.Contraseña);

        const passhash = await bcrypt.hash(req.body.Contraseña, salt)

        req.body.Contraseña = passhash;

        console.log(req.body.Contraseña);

        try {
         await Usuarios.create(Datos);
         return res.status(201).json({ message: 'Exito' })   
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }


    static async USER_LOGIN(req, res){
        try {
            var { Correo } = req.body;

            var User = await Usuarios.find({ Correo: Correo });

            if(User.length == 0){
                return res.json({ message: 'Usuario no registrado' })
            }else{
                User = User[0];
                if(User.Bloqueado == true){
                    return res.status(200).json({menssage: 'Usuarios Bloqueado: ' + User.BloqRazon })
                }

                bcrypt.compare(req.body.Contraseña, User.Contraseña, async function(err, result){
                    if(result == true){
                        var ip = req.body.ip;
                        req.session.token = User.Contraseña + ip;
                        await Usuarios.updateOne({_id: User._id }, {$set: { Token: req.session.token } })
                        return res.status(200).json({ message: 'Inicio Exitoso' })
                    }else{
                        return res.status(200).json({ message: 'Contraseña Incorrecta' })
                    }
                })
            }
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }
        //CERRAR SESION
        static async GET_LOGOUT(req, res){
            try {
                req.session.destroy();
                console.log('destroy')
                return res.status(200).json('ready')
            } catch (err) {
                return res.status(200).json({ message: err.message});
            }
        }

    static async GET_USERS(req, res){
        try {
            var Users = await Usuarios.find({});
            return res.status(200).json(Users)
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }
    static async GET_USER_BY_ID(req, res){
        try {
            var { id } = req.params;
            var User = await Usuarios.findOne({ _id: id });
            return res.status(200).json(User)
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }
    static async UPDATE_USER(req, res){
        var { id } = req.params;
        let new_image = '';
        if(req.file){
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/avatars/' + req.body.old_avatar);
            } catch (err) {
                console.log(err)
            }
        }else{
            new_image = req.body.old_avatar;
        }
        const newDatos = req.body;
        newDatos.Avatar = new_image;
        try {
            await Usuarios.updateOne({_id: id}, newDatos);
            return res.status(201).json({ message: 'Exito' });
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }
    static async DELETE_USER(req, res){
        try {
            var { id } = req.params;
            var User = await Usuarios.deleteOne({ _id: id });
            
            if(User.Avatar != ''){
                try {
                    fs.unlinkSync('./uploads/avatars/' + User.Avatar);
                } catch (err) {
                    console.log(err)
                }
            }
            return res.status(200).json({menssage: 'Usuario Eliminado' })
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }
    static async BLOCK_USER(req, res){
        try {
            var { id } = req.params;
            var User = await Usuarios.updateOne({ _id: id }, {$set: { Bloqueado: true } });
            return res.status(200).json({menssage: 'Usuarios Bloqueado' })
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }

    static async UNBLOCK_USER(req, res){
        try {
            var { id } = req.params;
            var User = await Usuarios.updateOne({ _id: id }, {$set: { Bloqueado: false } });
            return res.status(200).json({menssage: 'Usuarios Bloqueado' })
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }
    static async GET_USER_TOKEN(req, res){
        try {
            var token = req.session.token;
            console.log(token)
            var CurrentUser = await Usuarios.find({ Token: token });
            if(CurrentUser.length == 0){
                return res.status(200).json('Invitado');
            }else{
                return res.status(200).json(CurrentUser)
            }
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }

    //CRUD PRODUCTOS
    static async GET_PRODUCTS_OFF(req, res){
        try {
            var datos = await Productos.find({Importadora: 'Mannheim', stock: 'Disponible'});
            datos.map(e => { e.PrecioCliente = e.PrecioImportadora * 2 } )
            return res.status(200).json(datos)
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }

    //CRUD MODELOS
    static async GET_MODELS(req, res){
        try {
            var Models = await Modelos.find({});
            return res.status(200).json(Models)
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }
    static async GET_MODELS_SEARCH(req, res){
        try {
            var { key } = req.params;
            var Models = await Modelos.find({Modelo: RegExp( key, 'i') });
            return res.status(200).json(Models)
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }


    //CRUD MODELOS
    static async GET_FAMILIES(req, res){
        try {
            var Families = await Familias.find({});
            return res.status(200).json(Families)
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }

    //CRUD MENU
    static async GET_MENU(req, res){
        try {
            var modo = req.params.session;
            console.log(modo)

            if(modo == 'false'){
                var Json = await Menus.findOne({Modo: 'Invitado'});
                res.status(200).send(Json.Menu)
                console.log('invitado')
            }else if(modo == 'true'){
                var Json = await Menus.findOne({Modo: 'Usuario'});
                res.status(200).send(Json.Menu)
                console.log('usuario')
            }
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }

    //CRUD SLIDERS
    static async GET_SLIDERS(req, res){
        try {
            var Datos = await Sliders.find({});
            return res.status(200).json(Datos)
        } catch (err) {
            return res.status(200).json({ message: err.message});
        }
    }

//Custom
static async GET_MANNHEIMUPDATE(req, res){
    try {
        var Datos = await Productos.updateMany({Importadora: "Mannheim", Stock: 0}, {$set: {Stock: '0'}});
        var Datos2 = await Productos.updateMany({Importadora: "Mannheim", Stock: {$gt: 0}}, {$set: {Stock: 'Disponible'}});
        return res.status(200).json(Datos)
    } catch (err) {
        return res.status(200).json({ message: err.message});
    }
}

}