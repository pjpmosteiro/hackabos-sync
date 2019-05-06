'use strict';

const Joi = require('joi');
const uuidV4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const sgMail = require('@sendgrid/mail');
const mysqlPool = require('../../../databases/mysql-pool');
const UserModel = require('../../../models/user-model');


// MONGO

async function createUserProfile(uuid) {
  const userProfileData = {
    uuid,
    avatarUrl: null,
    fullName: null,
    preferences: {
      isPublicProfile: false,
      linkedIn: null,
      twitter: null,
      github: null,
      description: null,
    },
  };

  try {
    const userCreated = await UserModel.create(userProfileData);

    console.log(userCreated);
  } catch (e) {
    console.error(e);
  }
}

// SQL
// create the connection to database
let connection = null;
(async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'socialnetwork',
    password: '947710',
  });
})();
/*
//simple query
let connection = null;
connection.query(
  'SELECT 1+1',
  function(err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);
*/

async function validateSchema(payload) {
  /**
    * TO DO: Fill email, password and full name rules to be(all fields are mandatory):
      *
      email: Valid email *
      password: Letters(upper and lower
        case) and number *
      Minimun 3 and max 30 characters, using next regular expression: /^[a-zA-Z0-9]{3,30}$/ *
      fullName: String with 3 minimun characters and max 128 *
      */
  const schema = {
    email: Joi.string().email({
      minDomainAtoms: 2,
    }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),

  };

  return Joi.validate(payload, schema);
}


// send mail
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
async function sendEmailRegistration(userEmail, verificationCode) {
  const msg = {
    to: userEmail,
    from: {
      email: 'publico@pablojprieto.com.es',
      name: 'Social Network :)',
    },
    subject: 'Welcome to Hack a Bos Social Network',
    text: 'Start meeting people of your interests',
    html: `To confirm the account <a href="${
      process.env.HTTP_SERVER_DOMAIN
    }/api/account/activate?verification_code=${verificationCode}">activate it here</a>`,
  };
  console.log('Envio Mail ok');
  const data = await sgMail.send(msg);
  return data;
}


// //
async function create(req, res, next) {
  const accountData = {
    ...req.body,
  };

  ///Validar usuario con Joi, si no coincide, devolver error 400
  try {
    await validateSchema(accountData);
  } catch (e) {
    // Create validation errorconst verificationCode =

    return res.status(400).send(e);
  }

  const {
    email,
    password,
    fullName,
  } = accountData;

  try {
    //INSERTAR USER EN mysql
    //--Encriptar pass con bcrypt
    const securePassword = await bcrypt.hash(password, 10);
    const uuid = uuidV4();
    const now = new Date();
    const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
    // Usar bcrypt!!!

    //Insertar usuario en el SQL

    try {
      connection.query('INSERT INTO users SET ?', {
        uuid,
        email,
        password,
        created_at: createdAt,
      });
    } catch (e) {
      console.log('ERROR MYSQL');
      console.error(e);
      return res.status(409).send(e.message);
    }

    // CREAR CODIGO UUID E INSERTARLO EN EL SQL
    //crear codigo uuid
    const verificationCode = uuidV4();


    // Insert verificationCode into mysql
    try {
      connection.query('INSERT INTO users_activation SET ?', {
        user_uuid: uuid,
        verification_code: verificationCode,
        created_at: createdAt,
      });
    } catch (e) {
      console.error(e);
      return res.status(409).send(e.message);
    }

    /**
     * TODO: Tell user the account was created
     */
    res.status(204).json();

    /**
     * We are going to creaate minimum structure in mongodb
     */
    await createUserProfile(uuid);

    // send email
    try {
      /**
       * ->Send email to the user adding the verificationCode in the link
       */
      const verificationCode = await /* addVerificationCode(uuid) */ uuidV4();
      await sendEmailRegistration(email, verificationCode);
      console.log('Conexión Mail ok');
    } catch (e) {
      console.error('Sengrid error', e);
    }
  } catch (e) {
    // create error
    next(e);
  }
}
console.log('Arranque ok');
module.exports = create;