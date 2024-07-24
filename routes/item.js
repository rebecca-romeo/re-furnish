const express = require('express');
const router  = express.Router();
const { getItemById } = require('../db/queries/getItemById');

// GET/item/:id route for item id page with description
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = req.session.user;
  getItemById(id)
    .then((item) => {
      console.log(item);
      const templateVars = {item:item, user};
      res.render('item', templateVars);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
