const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    login:{
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    idade:{
        type: String,
        required: true,
    },
    raca:{
        type: String,
        required: true,
    },
    imagem:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Pet', petSchema);