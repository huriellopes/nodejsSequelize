const User = require('../models/User')

const UserController = {
  async index(_, res) {
    try {
      const users = await User.findAll()

      return res.status(200).json({ status: 200, data: users })
    } catch (err) {
      res.status(400).json({ status: 400, error: err })
    }
  },
  async store(req, res) {
    try {
      const { name, email } = req.body

      await User.create({ name, email })

      return res.status(201).json({ message: 'Created User!' })
    } catch (err) {
      res.status(400).json({ status: 400, error: err.errors })
    }
  },
}

module.exports = UserController
