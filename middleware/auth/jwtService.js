'use strict';

const fs = require('fs');
const jwt = require('jsonwebtoken');

const jwtConfig = require('./jwt/config');

const privateKey = fs.readFileSync( __dirname + '/jwt/keys/private.key', 'utf8');
const publicKey = fs.readFileSync( __dirname + '/jwt/keys/public.key', 'utf8');

class JwtService {

  constructor() {}

  sign(payload) {
    return jwt.sign(payload, privateKey, jwtConfig.options);
  }

  verify(token) {
    try {
      return jwt.verify(token, publicKey, jwtConfig.options);
    } catch(error) {
      return false;
    }
  }

  decode(token) {
    return jwt.decode(token, { complete: true });
  }

}

module.exports = new JwtService();