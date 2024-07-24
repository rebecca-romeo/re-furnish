const db = require('../connection.js');

// returns all of the items posted by sellers
const getAllItems = () => {
  return db
    .query(`
    SELECT id, title, price, photo, location_city, location_province, category, status_sold
    FROM items
    WHERE status_available = TRUE
    ORDER BY created_at`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getAllItems
};
