require('dotenv').config()

/** @param { import ('express') .Express } app */
module.exports = app => {
  app.listen(process.env.APP_PORT || 3030, () => console.log('Server is runing!'))
}