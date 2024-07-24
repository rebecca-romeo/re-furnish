const express = require('express');
const router  = express.Router();
const { getAllItems } = require('../db/queries/getAllItems');
const { getFavs } = require('../db/queries/favorites');
const { userItems } = require('../db/queries/userItems');
const { deleteItem } = require('../db/queries/deleteItem');
const { markSold } = require('../db/queries/markSold');
const { markUnSold } = require('../db/queries/markUnSold');

router.get('/', (req, res) => {
  const user = req.session.user;

  // when user not logged in, they see featured items but they can't like items
  getAllItems()
    .then((items) => {
      if (!user) {
        res.json({items});
        return;
      }
      getFavs(user)
        .then((itemsFav) => {
          res.json({items, itemsFav});
        });
    })
    .catch((err) => {
      next(err);
    });
});

// GET route for fetching the user available items
router.get('/userItem', (req, res) => {
  const user = req.session.user;
  const templateVars = { user, title: 'My Listing', msg: 'view your Listing Page' };
  if (!user) {
    return res.render('signed-out-err', templateVars);
  }
  userItems(user)
    .then((items) => {
      const result = { user, items };
      res.render('userItems', result);
    })
    .catch(err => res.json(err));
});

// Update the Item to be sold for particular user based on ItemId
router.post("/:id", (req, res) => {
  const itemId = req.params.id;
  const user = req.session.user;
  const templateVars = { user, title: 'My Listing', msg: 'view your Listing Page' };
  if (!user) {
    return res.render('signed-out-err', templateVars);
  }
  markSold(itemId)
    .then((result) => {
      res.redirect('/items/userItem');
    })
    .catch(err => res.json(err));
});

// Update the Item to be sold for particular user based on ItemId
router.post("/:id/sold", (req, res) => {
  const itemId = req.params.id;
  const user = req.session.user;
  const templateVars = { user, title: 'My Listing', msg: 'view your Listing Page' };
  if (!user) {
    return res.render('signed-out-err', templateVars);
  }
  markUnSold(itemId)
    .then((result) => {
      res.redirect('/items/userItem');
    })
    .catch(err => res.json(err));
});

// Delete the item for particular user based on ItemId
router.post("/:id/delete", (req, res) => {
  const itemId = req.params.id;
  const user = req.session.user;
  const templateVars = { user, title: 'My Listing', msg: 'view your Listing Page' };
  if (!user) {
    return res.render('signed-out-err', templateVars);
  }
  deleteItem(itemId)
    .then((result) => {
      res.redirect('/items/userItem');
    })
    .catch(err => res.json(err));
});

module.exports = router;
