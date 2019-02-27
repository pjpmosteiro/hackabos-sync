'use strict';

const Joi = require('joi');
const uuidV4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const sgMail = require('@sendgrid/mail');
/**
 * TODO: Refactorizar
 */
// create the connection to database
let connection = null;
(async () => {
  connection = await mysql.createConnection({
    host: '192.168.0.125',
    user: 'hackabos',
    database: 'socialnetwork',
    password: 'Mosteiro1',
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
    // email: rules.email,
    // password: rules.password,
    // fullName: rules.fullName,
  };

  return Joi.validate(payload, schema);
}

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
    // Usar bcrypt!!!z

    /**
     * TO DO: Insert user into mysql and get the user uuid
     */
    try {
      connection.query('INSERT INTO users SET ?', {
        uuid,
        email,
        password,
        created_at: createdAt,
      })
    } catch (e) {
      console.error(e);
      return res.status(409).send(e.message);
    }

    /**
     * TO DO: CREATE VERIFICATION CODE AND INSERT IT INTO MySQL
     */
    const verificationCode = uuidV4();

    //
    // Insert verificationCode into mysql
    try {
      connection.query('INSERT INTO users_activation SET ?', {
        user_uuid: uuid,
        verification_code: verificationCode,
        created_at: createdAt,
      });
      console.log('Insert ok');
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
      /**
       * ->Send email to the user adding the verificationCode in the link
       */
      //ABRIR VPN AL SERVIDOR DE CASA!!!!!
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: 'publico@pablojprieto.com.es',
        from: 'no-reply@pablojprieto.com.es',
        subject: 'Email Test Social Network',
        text: 'Mu bieeen, ya sabes mandar correos, einstein....',
      };
      sgMail.send(msg);
      console.log('mail ok');
    } catch (e) {
      console.error('Sengrid error', se);
    }
  } catch (e) {
    // create error
    next(e);
  }
}
console.log('Arranque ok');
module.exports = create;
return;