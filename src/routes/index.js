const UserController = require('../app/controllers/UserController')
/** @param { import ('express') .Express } app */
module.exports = app => {
  app.get('/test', (_, res) => res.json('Api is running!'))

  app.get('/users', UserController.index)
  app.post('/users', UserController.store)
}
