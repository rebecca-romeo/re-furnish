const db = require('../connection.js');

// fetches all the available items for a particular logged in user
const userItems = (user) => {
  return db
    .query(`
    SELECT items.id, items.status_sold, items.photo, items.price, items.title, items.location_city, items.location_province
    FROM items
    JOIN users ON items.owner_id = users.id
    WHERE users.email = $1
    AND status_available = true
    ORDER BY created_at`,[user])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {  userItems };
