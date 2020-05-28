require('dotenv').config()
const express = require('express')
const consign = require('consign')

const app = express()

app.disable('x-powered-by')

consign({
  cwd: './app',
  verbose: process.env.APP_DEBUG === true || false,
  locale: 'pt-br'
})
  .include('./app/middlewares/globals')
  .then('./database')
  .then('./routes')
  .then('./server.js')
  .into(app)