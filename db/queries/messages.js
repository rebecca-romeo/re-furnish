const db = require('../connection.js');

// Select information from the messages db according to the conversation id
const getMessages = () => {
  return db
    .query(`
    SELECT message, sender_id, time_sent FROM messages
    WHERE conversation_id = 1
    ORDER BY time_sent ASC;
    `)
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {  getMessages };
