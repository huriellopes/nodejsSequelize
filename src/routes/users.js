/** @param { import ('express').Express } app */
module.exports = (app) => {
  const controller = app.app.controllers

  app.get('/users', controller.UserController.index)
  app.post('/users', controller.UserController.store)
  // Address
  app.get('/users/:user_id/addresses', controller.AddressController.index)
  app.post('/users/:user_id/addresses', controller.AddressController.store)
  // Techs
  app.get('/users/:user_id/techs', controller.TechController.index)
  app.post('/users/:user_id/techs', controller.TechController.store)
  app.delete('/users/:user_id/techs', controller.TechController.delete)
}
