/** @param { import ('express') .Express } app */
module.exports = app => {
  app.get('/test', (_, res) => res.json('Api is running!'))

  app.get('/users', app.controllers.UserController.index)
  app.post('/users', app.controllers.UserController.store)
}
