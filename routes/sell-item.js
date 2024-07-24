const express = require('express');
const router  = express.Router();
const { getUserIdFromEmail, createSellListing } = require('../db/queries/sell');

// GET /sell-item
// displays the form for users to input info  about the item they're selling
router.get('/', (req, res) => {
  const user = req.session.user;
  const templateVars = { user, title: 'Sell Items', msg: 'sell an item' };

  if (!user) {
    res.render('signed-out-err', templateVars);
  }
  res.render('sell-item', templateVars);
});

// POST /sell/item
// inputs the form information into the db
router.post('/item', (req, res) => {
  const sellItem = req.body;
  const userEmail = req.session.user;

  // use the user's email to get their user id from the database
  getUserIdFromEmail(userEmail)
    .then((userId) => {
    // then pass the user id and the form input data to createSellListing, which inserts all the data into the items db
      createSellListing(sellItem, userId.rows[0].id)
        .then((result) => {
          res.redirect('/items/userItem');
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error creating listing');
    });
});

module.exports = router;
