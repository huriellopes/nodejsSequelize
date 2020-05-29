const app = require('./app')

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(`=> Servidor rodando na porta: ${process.env.APP_PORT || 3000}!`)
  console.log(`=> Modo debug: ${process.env.APP_DEBUG === 'true' || false}`)
})
