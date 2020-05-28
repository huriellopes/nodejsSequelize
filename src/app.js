const dotenv = require('dotenv')
const express = require('express')
const consign = require('consign')

dotenv.config({ path: './.env' })

const app = express()

app.disable('x-powered-by')

consign({
  cwd: './app',
  verbose: process.env.APP_DEBUG === 'true' || false,
  locale: 'pt-br'
})
  .include('./middlewares/globals')
  .then('./controllers')
  .then('./models')
  .then('./database')
  .then('./routes')
  .into(app)

module.exports = app
