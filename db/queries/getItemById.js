const db = require('../connection.js');

// returns the item and seller information based on id
const getItemById = (id) => {
  return db
    .query(`
    SELECT items.*, users.email
    FROM items
    JOIN users ON items.owner_id = users.id
    WHERE items.id = $1
    ORDER BY created_at`,[id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getItemById
};
