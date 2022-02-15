const express = require('express');
const router = express.Router();
const API = require('../controllers/api')
const multer = require('multer')

//multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads/avatars")
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload_avatars = multer({
    storage: storage,
}).single("Avatar");


//USERS CRUD + BLOCK AND UNBLOCK
router.post('/user', upload_avatars, API.CREATE_USER);
router.post('/user-login', API.USER_LOGIN);
router.get('/logout', API.GET_LOGOUT);
router.get('/users', API.GET_USERS);
router.get('/user/:id', API.GET_USER_BY_ID);
router.patch('/user/:id', upload_avatars, API.UPDATE_USER);
router.delete('/user/:id', API.DELETE_USER);
router.lock('/user/:id', API.BLOCK_USER);
router.unlock('/user/:id', API.UNBLOCK_USER);
router.post('/user_token', API.GET_USER_TOKEN);

//PRODUCTOS CRUD
router.get('/product-off', API.GET_PRODUCTS_OFF);


//MODELOS CRUD
router.get('/models', API.GET_MODELS);
router.get('/models_search/:key', API.GET_MODELS_SEARCH);
//FAMILIAS CRUD
router.get('/families', API.GET_FAMILIES);
//MENU CRUD
router.get('/menu_auth/:session', API.GET_MENU);
//SLIDERS CRUD
router.get('/sliders', API.GET_SLIDERS);



//EXTRAS
router.get('/custom', API.GET_MANNHEIMUPDATE);


module.exports = router;