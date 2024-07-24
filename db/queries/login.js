const db = require('../connection');

// Use the cookie session (which is set to their email) to select all user data from the users table
const getUserByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUserByEmail };
