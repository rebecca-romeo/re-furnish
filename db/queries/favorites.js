const db = require('../connection');

// returns item information that the user has favourited
const getFavs = (user) => {
  return db.query(`
    SELECT items.photo, items.price, items.title, items.location_city, items.location_province, favorites.item_id as item_id
    FROM favorites
    JOIN items ON favorites.item_id = items.id
    JOIN users ON favorites.user_id = users.id
    WHERE users.email = $1;
  `, [user])
    .then(data => {
      return data.rows;
    });
};

// removes an item id from user's list of favourites
const removeFav = (user, item_id) => {
  return db.query(`
  DELETE FROM favorites
  WHERE user_id = (SELECT id FROM users WHERE email = $1)
  AND item_id = $2;
`, [user, item_id]);
};

// adds an item id to the user's list of favourites
const addFav = (user, item_id) => {
  return db.query(`
  INSERT INTO favorites (user_id, item_id)
  VALUES ((SELECT id FROM users where email = $1), $2)
  `, [user, item_id]
  );
};

module.exports = { getFavs, removeFav , addFav };



