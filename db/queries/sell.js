const db = require('../connection');

// Use the logged in user's email to find their user id
const getUserIdFromEmail = (email) => {
  return db.query(`
  select id from users
  where email = $1;
  `, [email]);
};

// Function that gets all of the user's form input data and passes it into the db query, which then inserts it into the items db
const createSellListing = (sellItem, owner_id) => {
  const {
    title,
    price,
    photo,
    location_city,
    location_province,
    category,
    condition,
    description,
  } = sellItem;

  return db.query(`
  INSERT INTO items (title, price, photo, location_city, location_province, category, condition, description, created_at, owner_id)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, Now(), $9)
  RETURNING *;
`, [title, price, photo, location_city, location_province, category, condition, description, owner_id]);
};

module.exports = { createSellListing, getUserIdFromEmail };
