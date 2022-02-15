// import
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');

const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
mongoose.Promise = global.Promise; 
const port = process.env.PORT // 3000;


// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "uploads/avatars")));


// database connection
const conn = require('./conection');
const { env } = require("process");


//configuracion de session
let store = new MongoStore({
    mongoUrl: process.env.DB_URI,
    collection: "sessions"
 });

app.use(
    session({
        secret: process.env.SESSION_SECRET || 'Chilerepuestos',
        resave: false,
        store: store,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
      })
      );


// router prefix
app.use('/api', require('./routes/routes'))

//START SERVER

app.listen(port, () => console.log(`server running at http://localhost:${port}`))