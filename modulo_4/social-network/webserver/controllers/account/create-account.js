'use strict';

const Joi = require('joi');
const uuidV4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const sgMail = require('@sendgrid/mail');
const mysqlPool = require('../../../databases/mysql-pool');

/**
 * TODO: Refactorizar
 */
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
      minDomainAtoms: 2
    }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    // email: rules.email,
    // password: rules.password,
    // fullName: rules.fullName,
  };

  return Joi.validate(payload, schema);
}



// send mail
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
async function sendEmailRegistration(userEmail, verificationCode) {
  const msg = {
    to: userEmail,
    from: {
      email: "publico@pablojprieto.com.es",
      name: "Social Network :)"
    },
    subject: "Welcome to Hack a Bos Social Network",
    text: "Start meeting people of your interests",
    html: `To confirm the account <a href="${
      process.env.HTTP_SERVER_DOMAIN
    }/api/account/activate?verification_code=${verificationCode}">activate it here</a>`
  };
  console.log("Envio Mail ok");
  const data = await sgMail.send(msg);
  return data;
}


////
async function create(req, res, next) {
  const accountData = {
    ...req.body,
  };

  /**
   * Validate if user data is valid to create an account
   * in other case, generate a 400 Bad Reqeust error
   */
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
    /**
     * TO DO: Insert user into MySQL
     *  hash the password using bcrypt library
     */
    const securePassword = await bcrypt.hash(password, 10);
    const uuid = uuidV4();
    const now = new Date();
    const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
    //Usar bcrypt!!!z

    /**
     * TO DO: Insert user into mysql and get the user uuid
     */

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

    /**
     * TO DO: CREATE VERIFICATION CODE AND INSERT IT INTO MySQL
     */
    const verificationCode = uuidV4();

    //
    //Insert verificationCode into mysql
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

    // send email
    try {
      /**
       * ->Send email to the user adding the verificationCode in the link
       */
      const verificationCode = await /*addVerificationCode(uuid)*/ uuidV4();
      await sendEmailRegistration(email, verificationCode);
      console.log("Conexión Mail ok");

    } catch (e) {
      console.error('Sengrid error', e);
    }
  } catch (e) {
    // create error
    next(e);
  }
}
console.log("Arranque ok");
module.exports = create;