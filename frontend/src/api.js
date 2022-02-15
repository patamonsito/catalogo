import axios from 'axios';
const url = '/api';

export default class API {
    //Usuarios CRUD
    static async GET_USERS(){
        const res = await axios.get(url+'/users');
        return res.data;
    }
    static async GET_USER_BY_ID(id){
        const res = await axios.get(url+ '/user/' +id);
        return res.data;
    }
    static async CREATE_USER(){
        const res = await axios.post(url+ '/user');
        return res.data;
    }
    static async USER_LOGIN(Correo, Contraseña, ip){
        const res = await axios.post(url+ '/user-login', {
            Correo: Correo,
            Contraseña: Contraseña,
            ip: ip
        });
        return res.data;
    }
    static async GET_LOGOUT(id){
        const res = await axios.get(url+ '/logout');
        return res.data;
    }

    static async UPDATE_USER(id){
        const res = await axios.patch(url+ '/user/' + id);
        return res.data;
    }
    static async DELETE_USER(id){
        const res = await axios.delete(url+ '/user/' + id);
        return res.data;
    }
    static async BLOCK_USER(id){
        const res = await axios.lock(url+ '/user/' + id);
        return res.data;
    }
    static async UNBLOCK_USER(id){
        const res = await axios.unlock(url+ '/user/' + id);
        return res.data;
    }
    
    static async GET_USER_TOKEN(){
        const res = await axios.post(url+ '/user_token');
        return res.data;
    }
    //PRODUCTOS CRUD
    static async GET_PRODUCTS_OFF(){
        const res = await axios.get(url+ '/product-off');
        return res.data;
    }
    //MODELOS CRUD
    static async GET_MODELS(){
        const res = await axios.get(url+ '/models');
        return res.data;
    }
    static async GET_MODELS_SEARCH(key){
        const res = await axios.get(url+ '/models_search/' + key);
        return res.data;
    }
    //FAMILIAS CRUD
    static async GET_FAMILIES(){
        const res = await axios.get(url+ '/families');
        return res.data;
    }
    //MENU CRUD
    static async GET_MENU(id){
        const res = await axios.get(url+ '/menu_auth/'+id);
        return res.data;
    }
    //SLIDERS CRUD
    static async GET_SLIDERS(){
        const res = await axios.get(url+ '/sliders');
        return res.data;
    }

}