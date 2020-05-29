/** @param { import ('express').Express } app */
module.exports = (app) => {
  const controller = app.app.controllers

  app.get('/test', (_, res) => res.json('Api is running!'))
  //Reports
  app.get('/report', controller.ReportController.show)
}
