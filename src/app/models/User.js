const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: 'name field cannot be empty!',
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: {
              msg: 'field need is a e-mail!',
            },
            notEmpty: {
              msg: 'email field cannot be empty!',
            },
          },
        },
      },
      {
        sequelize,
      }
    )
  }

  static associate(models) {
    this.hasOne(models.Address, { foreignKey: 'user_id', as: 'address' })
    this.belongsToMany(models.Tech, {
      foreignKey: 'user_id',
      through: 'user_techs',
      as: 'techs',
    })
  }
}

module.exports = User
