'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.once('open',()=>{
    console.log('Conectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

mongoose.connection.on('error', err => {
    console.log('Error de conexión', err);
    process.exit(1);
});
  