const mongoose = require('mongoose');

const cuidadoSchema = new mongoose.Schema({
    tipo:{
        type: String,
        required: true,
    },
    texto: [{ cuidados: String, titulo: String }]
});

module.exports = mongoose.model('Cuidado', cuidadoSchema);