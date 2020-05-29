const UserController = require('../app/controllers/UserController')
const AddressController = require('../app/controllers/AddressController')
const TechController = require('../app/controllers/TechController')

/** @param { import ('express').Express } app */
module.exports = (app) => {
  app.get('/users', UserController.index)
  app.post('/users', UserController.store)
  // Address
  app.get('/users/:user_id/addresses', AddressController.index)
  app.post('/users/:user_id/addresses', AddressController.store)
  // Techs
  app.get('/users/:user_id/techs', TechController.index)
  app.post('/users/:user_id/techs', TechController.store)
  app.delete('/users/:user_id/techs', TechController.delete)
}
