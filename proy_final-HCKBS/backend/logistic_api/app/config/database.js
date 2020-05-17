<<<<<<< HEAD
//Conexión a Mongo --  Acceso restringido por IP :)
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://lex:Mosteiro1@cluster0-3qi3i.gcp.mongodb.net/logistic';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
=======
//Conexión a Mongo --  Acceso restringido por IP :)
const mongoose = require('mongoose');
// NOTA DEL AUTOR: ESTA DIRECCION DE MONGO ATLAS NO ES OPERATIVA DESDE FUERA DE MI VPN
const mongoDB = 'mongodb+srv://lex:Mosteiro1@cluster0-3qi3i.gcp.mongodb.net/logistic';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
>>>>>>> 538bed00129fb4c4f2fdeefc533507a6bf8c6767
module.exports = mongoose;