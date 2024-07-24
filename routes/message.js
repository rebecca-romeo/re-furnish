const express = require('express');
const router  = express.Router();
const { getMessages } = require('../db/queries/messages');

// GET route to view messages based on user's cookie session
router.get('/', (req, res) => {
  const user = req.session.user;
  const templateVars = { user, title: 'Message', msg: 'view your message' };

  if (!user) {
    res.render('signed-out-err', templateVars);
  }

  getMessages()
    .then((messages) => {
      const templateVars = { user, messages };
      res.render('message', templateVars);
    })
    .catch(err => res.json(err));

});


module.exports = router;
