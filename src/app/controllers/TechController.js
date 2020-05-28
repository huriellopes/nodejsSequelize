const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: { association: 'techs', through: { attributes: [] } },
    })

    if (!user) res.status(404).json({ status: 404, error: 'User not found!' })

    return res.status(200).json({ status: 200, data: user.techs })
  },
  async store(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user) res.status(404).json({ status: 404, error: 'User not found!' })

    const [tech] = await Tech.findOrCreate({
      where: { name },
    })

    await user.addTech(tech)

    return res
      .status(201)
      .json({ status: 201, success: 'Tech created in associated a user!' })
  },

  async delete(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user) res.status(404).json({ status: 404, error: 'User not found!' })

    const tech = await Tech.findOne({
      where: { name },
    })

    await user.removeTech(tech)

    return res
      .status(200)
      .json({ status: 200, success: 'Technology deleted in success' })
  },
}
