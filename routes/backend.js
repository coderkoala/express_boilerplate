"use strict";

var express = require("express");
var router = express.Router();
const { QueryTypes } = require("sequelize");
const db = require("../models");

// Import controllers.
const requireDir = require("require-dir");
const _ = requireDir("../controller");
const api = "/v1";

//Import Middleware.
const { JwtMiddleware } = require('../middleware/jwtMiddleware');

// Login system.
router.post(`${api}/authenticate`, _.auth.authenticate);

module.exports = router;
