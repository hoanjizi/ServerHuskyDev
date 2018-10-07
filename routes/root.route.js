const express = require('express')
const app = express.Router()

require('./husky/husky.route')(app)
require('./comment/comment.route')(app)

module.exports = app