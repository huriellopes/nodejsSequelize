const UserController = require('../app/controllers/UserController')
const AddressController = require('../app/controllers/AddressController')
const TechController = require('../app/controllers/TechController')
const ReportController = require('../app/controllers/ReportController')
/** @param { import ('express').Express } app */
module.exports = (app) => {
  app.get('/test', (_, res) => res.json('Api is running!'))
  app.get('/users', UserController.index)
  app.post('/users', UserController.store)
  // Address
  app.get('/users/:user_id/addresses', AddressController.index)
  app.post('/users/:user_id/addresses', AddressController.store)
  // Techs
  app.get('/users/:user_id/techs', TechController.index)
  app.post('/users/:user_id/techs', TechController.store)
  app.delete('/users/:user_id/techs', TechController.delete)
  //Reports
  app.get('/report', ReportController.show)
}
