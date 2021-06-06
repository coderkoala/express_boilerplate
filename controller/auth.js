'use strict';

const bcrypt = require('bcrypt');
const UsersRepository = require('../repositaries/users');
const JwtService = require('../middleware/auth/jwtService');

class AuthenticationController {

  constructor() {}

  async authenticate(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    // return res.json({0:req.body,1:req.query, 2:req.headers, found: await UsersRepository.findOne(username)});

    let user = UsersRepository.findOne(username);

    let valid = user.then((user) => {
      if (user)
        return bcrypt.compare(password, user.dataValues.password);
      else
        throw err;
    });

    return Promise.all([user, valid])
      .then(([user, valid]) => {
        if(valid) {
          console.log(user.dataValues.roles);
          let payload = { user: user.dataValues.username, roles: user.dataValues.roles };
          return res.status(200).send({ token: JwtService.sign(payload) });
        } else {
          throw err;
        }
      })
      .catch((error) => res.status(401).send({ error: 'Invalid credentials' }));
  }

}

module.exports = new AuthenticationController(UsersRepository);