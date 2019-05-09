const mongoose = require('mongoose');
//Define a schema
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
    // NO REQ-- VALUE ON DEFAULT APPLIED
    dest: {
        type: String,
        trim: true,
        required: false,
    },
});
module.exports = mongoose.model('Track', TrackSchema)