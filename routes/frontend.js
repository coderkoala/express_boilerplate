'use strict';

const express = require('express');
const router = express.Router();
const requireDir = require('require-dir');
const _ = requireDir('../controller');

// Root Controller.
router.get('/', _.root.view);

module.exports = router;
