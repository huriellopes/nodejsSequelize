const Sequelize = require('sequelize')
const dbConfig = require('../config/connection')

const User = require('../app/models/User')
const Address = require('../app/models/Address')

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)

module.exports = connection
