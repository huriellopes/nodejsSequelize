const ReportController = require('../app/controllers/ReportController')

/** @param { import ('express').Express } app */
module.exports = (app) => {
  app.get('/test', (_, res) => res.json('Api is running!'))
  //Reports
  app.get('/report', ReportController.show)
}
