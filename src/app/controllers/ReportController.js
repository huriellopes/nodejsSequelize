const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
  async show(req, res) {
    // Desses usuários, buscar as tecnologias que começam com React
    const users = await User.findAll({
      attributes: ['name', 'email'],
      include: [
        { association: 'address' },
        {
          association: 'techs',
          required: false,
          where: { name: { [Op.like]: 'Node%' } },
        },
      ],
    })

    return res.status(200).json({ status: 200, data: users })
  },
}
