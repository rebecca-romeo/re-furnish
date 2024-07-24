const db = require('../connection.js');

// updates the status of an unsold item to sold for a particular logged in user
const markSold = (itemId) => {
  return db
    .query(`
    UPDATE items
    SET status_sold  = true
    WHERE items.id = $1`,[itemId])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {  markSold };
