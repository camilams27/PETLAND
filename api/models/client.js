const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    login:{
        type: String,
        required: true,
    },
    senha:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required: true,
    },
    dataNasc:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Client', clientSchema);