const User = require('./models/User')

module.exports = {
  async index (_, res) {
    try {
      const users = await User.findAll()

      return res.status(200).json({ 'status': 200, 'data': users })
    } catch (err) {
      res.status(400).send('Error')
    }
  },
  async store (req, res) {
    const { name, email } = req.body

    await User.create({ name, email })

    return res.status(201).json({ 'message': 'Created User!' })
  }
}