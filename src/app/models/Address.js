const { Model, DataTypes } = require('sequelize')

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: 'zipcode field cannot be empty!',
            },
          },
        },
        street: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: 'street field cannot be empty!',
            },
          },
        },
        number: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: 'number field cannot be empty!',
            },
            isNumeric: true,
          },
        },
      },
      {
        sequelize,
        tableName: 'addresses',
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' })
  }
}

module.exports = Address
