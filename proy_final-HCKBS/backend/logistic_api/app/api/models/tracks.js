const mongoose = require('mongoose');
//Generar esqueña
const Schema = mongoose.Schema;
const TrackSchema = new Schema({
    dest: {
        type: String,
        trim: true,
        required: true,
    },
    remit: {
        type: String,
        trim: true,
        required: true,
    },
    // NO REQ-- Valor por defecto aplicado
    dest: {
        type: String,
        trim: true,
        required: false,
    },
});
module.exports = mongoose.model('Track', TrackSchema)