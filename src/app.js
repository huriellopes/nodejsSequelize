const dotenv = require('dotenv')
const express = require('express')
const consign = require('consign')
const routes = require('./routes')

dotenv.config({ path: './.env' })

const app = express()

app.disable('x-powered-by')

consign({
  cwd: './app',
  verbose: process.env.APP_DEBUG === 'true' || false,
  locale: 'pt-br'
})
  .include('./app/middlewares/globals')
  .then('./database')
  .then('routes')
  .into(app)

app.use(routes)

module.exports = app
