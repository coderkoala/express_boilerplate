'use strict';

const bcrypt = require('bcrypt');
const UsersRepository = require('../repositaries/users');
const JwtService = require('../middleware/auth/jwtService');

class AuthenticationController {

  constructor() {}

  async authenticate(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    console.dir( {'1': UsersRepository.findOne,'2': username} );
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

          // Debug code
          // Todo: Remove
          // curl -X POST -H "Content-Type: application/json" -d "{ \"username\": \"admin\", \"password\":\"pass\" }" http://localhost:3000/api/v1/authenticate
          UsersRepository.findById(user.dataValues.id).then(user => { console.log(user)});
          console.log('here');
          // EndTodo
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