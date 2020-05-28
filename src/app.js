const dotenv = require('dotenv')
const express = require('express')
const consign = require('consign')

dotenv.config({ path: './.env' })

const app = express()

app.disable('x-powered-by')

consign({
  cwd: 'src/app',
  verbose: process.env.APP_DEBUG === 'true' || false,
  locale: 'pt-br',
  extensions: ['.js'],
})
  .include('./middlewares/globals')
  // .then('./controllers')
  .then('../database')
  .then('../routes')
  .into(app)

module.exports = app
