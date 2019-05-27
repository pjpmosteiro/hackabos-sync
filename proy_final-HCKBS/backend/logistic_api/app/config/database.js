//Conexión a Mongo --  Acceso restringido por IP :)
const mongoose = require('mongoose');
// NOTA DEL AUTOR: ESTA DIRECCION DE MONGO ATLAS NO ES OPERATIVA DESDE FUERA DE MI VPN
const mongoDB = 'mongodb+srv://lex:Mosteiro1@cluster0-3qi3i.gcp.mongodb.net/logistic';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;