const User = require('../models/User')
const Address = require('../models/Address')

module.exports = {
  async index(req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: { association: 'address' },
    })

    if (!user) res.status(404).json({ error: 'User not found!' })

    return res.status(200).json({ status: 200, data: user.address })
  },
  async store(req, res) {
    const { user_id } = req.params
    const { zipcode, street, number } = req.body

    const user = await User.findByPk(user_id)

    if (!user) res.status(404).json({ error: 'User not found!' })

    await Address.create({ zipcode, street, number, user_id })

    return res.status(201).json({ success: 'Address created in user!' })
  },
}
