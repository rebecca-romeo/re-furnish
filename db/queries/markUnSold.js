const db = require('../connection.js');

// updates the status of a sold item to unsold for a particular logged in user

const markUnSold = (itemId) => {
  return db
    .query(`
    UPDATE items
    SET status_sold  = false
    WHERE items.id = $1`,[itemId])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {  markUnSold };
