require('dotenv').config()

module.exports = {
  dialect: process.env.APP_DIALECT,
  host: process.env.APP_HOST,
  username: process.env.APP_USERNAME,
  password: process.env.APP_PASSWORD,
  database: process.env.APP_DATABASE,
  define: {
    timestamps: true,
    underscored: true
  }
}