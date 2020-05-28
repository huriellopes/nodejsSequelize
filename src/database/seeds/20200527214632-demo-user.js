'use strict'

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Huriel Lopes',
          email: 'huriellopes1996@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
