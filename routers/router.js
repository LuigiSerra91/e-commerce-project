const express = require('express');
const router = express.Router()

const controller = require('../controller/controller.js')

router.get('/post', controller.index)


module.exports = router