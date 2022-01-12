const express            = require('express');
const router             = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const passport           = require('passport');
const Users              = require('../models/users');

// GET Routes
router.get('/', (req, res) => {
  res.render('index', {title: 'Home'});
});

router.get('/login', (req, res) => {
  res.render('login', {title: 'Login'});
});

router.get('/secret', connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.render('secret', {title: 'Secret Page'})
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// POST Routes
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/secret',
  }),
  (req, res) => {
    console.log(req.user);
  }
);

router.post('/signup', (req, res, next) => {
  Users.register(
    new Users({username: req.body.username, email: req.body.email}),
    req.body.password,

    (err, account) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: 'err'});
      }

      passport.authenticate('local')(req, res, () => {
        res.send('/secret');
      });
    }
  );
});

module.exports = router;
