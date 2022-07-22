const mongoose = require('mongoose');

const vacinaSchema = new mongoose.Schema({
    tipo:{
        type: String,
        required: true,
    },
    vacinas: [{ vacina: String }]
});

module.exports = mongoose.model('Vacina', vacinaSchema);