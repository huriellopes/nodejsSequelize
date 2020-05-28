const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './.env' })

app.listen(process.env.APP_PORT || 3030, () => {
  console.log(`=> Servidor rodando na porta: ${process.env.APP_PORT || 3000}!`)
  console.log(`=> Modo debug: ${process.env.APP_DEBUG === 'true' || false}`)
})
