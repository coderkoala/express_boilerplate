'use strict';

const db = require("../models");


class UsersRepository {

  constructor() {}

  findAll() {
    return db.Users.findAll({
      attributes: {
        exclude: ['id', 'password']
      }
    });
  }

  findById(id) {
    return db.Users.findByPk(id);
  }

  findOne(username) {
    return db.Users.findOne({
      where: { username: username }
    });
  }

  save(user) {
    return db.Users.build(user).save()
      .then((user) => user)
      .catch((error) => new Promise((resolve, reject) => reject(error)));
  }

  exists(id) {
    return db.Users.count({
      where: { id: id }
    });
  }

}

module.exports = new UsersRepository();