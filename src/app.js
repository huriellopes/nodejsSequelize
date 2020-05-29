require('dotenv').config()
const express = require('express')
const consign = require('consign')

const app = express()

app.disable('x-powered-by')

consign({
  cwd: 'src',
  verbose: process.env.APP_DEBUG === 'true' || false,
  locale: 'pt-br',
  extensions: ['.js'],
})
  .include('app/middlewares/globals')
  .then('app/controllers')
  .then('./routes')
  .into(app)

module.exports = app
