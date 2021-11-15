const express = require('express');
const User = require('../models/user');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// signup
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    req.session.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send('user creation has problems');
  }
});

// login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    console.log(user);

    if (!user) {
      res.send('user does not exist');
    } else {
      const { password: passDB } = user; // const passDB = user.password
      console.log(password);
      console.log(passDB);
      if (password === passDB) {
        req.session.username = username;
        req.session.password = password;
        req.session.save();
        res.send('user logged in successfully');
      } else {
        res.send('user credentials are wrong');
      }
    }
  } catch (err) {
    res.send('user login has problems');
  }
});

// logout
router.post('/logout', isAuthenticated, (req, res) => {
  req.session.username = '';
  req.session.password = '';
  req.session.save();
  res.send('user is logged out');
});

module.exports = router;
