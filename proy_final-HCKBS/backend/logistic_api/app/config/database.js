//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://lex:Mosteiro1@cluster0-3qi3i.gcp.mongodb.net/logistic';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;