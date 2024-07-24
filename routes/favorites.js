const express = require('express');
const router = express.Router();
const { getFavs, removeFav, addFav } = require('../db/queries/favorites');

router.get('/', (req, res) => {
  const user = req.session.user;
  const templateVars = { user, title: 'Favorite Items', msg: 'view your favorites' };

  if (!user) {
    res.render('signed-out-err', templateVars);
  }

  // DB is queried by calling the getFavs fn, returns data related to favorite items
  // pass this data to templateVars to use in ejs
  getFavs(user)
    .then((favorites) => {
      const templateVars = { user, favorites };
      res.render('favorites', templateVars);
    })
    .catch(err => res.json(err));
});

// POST /favourites/:id/delete
// deletes a favorite item
router.post("/:id/delete", (req, res) => {
  const user = req.session.user;
  const item_id = req.params.id;
  const templateVars = { user, title: 'Favorites', msg: 'delete a favorite' };

  // If user is not signed in, direct them to err page
  if (!user) {
    return res.render('signed-out-err', templateVars);
  }

  // delete a user's favorite from the database and page using the removeFav fn
  removeFav(user, item_id)
    .then(() => {
      res.redirect('/favorites');
    })
    .catch(err => res.json(err));
});

// Adds an item to favorites
router.post("/add/:id", (req, res) => {
  const user = req.session.user;
  const item_id = req.params.id;
  const templateVars = { user, title: 'Favorites', msg: 'favorite an item' };


  // If user is not signed in, direct them to err page
  if (!user) {
    return res.render('signed-out-err', templateVars);
  }

  addFav(user, item_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => res.json(err));

});

module.exports = router;
