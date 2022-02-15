const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 
require("dotenv").config();

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }


mongoose.connect(process.env.DB_URI, options)
  .then(function () { 
    console.log('DB Connected.'); 
  }).catch(function (err) { 
    console.log(err.message); 
  }); 

module.exports = mongoose.connection;