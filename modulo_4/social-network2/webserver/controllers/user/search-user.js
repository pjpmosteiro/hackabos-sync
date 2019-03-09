'use strict';

const Joi = require('Joi');

async function validate(payload) {


}

async function searchUsers(req, res, next) {
  const {
    q
  } = req.query;
  return res.send([]);
}

module.exports = searchUsers;
//{
//  $text:
//    {
//      $search: <string>,
//      $language: <string>,
//      $caseSensitive: <boolean>,
//      $diacriticSensitive: <boolean>
//    }
//}
//