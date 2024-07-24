const express = require('express');
const router = express.Router();
const { getUserByEmail } = require('../db/queries/login');

// GET route for /login
// displays the login form
router.get('/login', (req, res) => {
  if (req.session.user) {
    res.redirect('/home');
    return;
  }
  const templateVars = { user: req.session.user };
  res.render('login', templateVars);
});

// POST route /login
// takes the user input from the form, and submits the data
// checks if the user email and pw match the db info
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  getUserByEmail(email)
    .then(user => {
      if (!user) {
        res.status(401).send('Invalid email or password');
        return;
      }
      if (user.password !== password) {
        res.status(401).send('Invalid email or password');
        return;
      }
      req.session.user = email;
      res.redirect('/home');

    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while logging in');
    });
});

// clear user cookie on logout
router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/auth/login');
});


module.exports = router;
