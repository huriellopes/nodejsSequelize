const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({path: './.env'})

app.listen(process.env.APP_PORT || 3030, 
  () => console.log('Server is runing!'))