const db = require('../connection.js');

//To update the available item for a particular login user, treat as a delete
//since fetching only avaialble items
const deleteItem = (itemId) => {
  return db
    .query(`
    UPDATE items
    SET status_available  = false
    WHERE items.id = $1`,[itemId])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {  deleteItem };
