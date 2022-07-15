const mongoose = require('mongoose');

function connectDatabase() {
    mongoose.connect("mongodb+srv://camasi:WmZqrWcdCkqINuTD@cluster0.lruia.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const bd = mongoose.connection;
    bd.on('error', (error)=> console.log(error));
    bd.once('open', ()=> console.log('conectado com o banco de dados'));
};

module.exports = connectDatabase;