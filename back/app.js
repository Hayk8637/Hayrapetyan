const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const app            = express();
const passport       = require('passport');
const session        = require('express-session');
const Users          = require('./models/users');
const router         = require('./routes/routes');
require('dotenv').config();
const env = process.env;

app.use(router);

// Set up view engine and layout
app.use(expressLayouts);
app.set('layout', './views/layout');
app.set('view engine', 'ejs');

// Set up session
app.use(
  session({
    secret           : env.SECRET,
    resave           : false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({extended: false}));

// Set up Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

// Set up Express server
const server = app.listen(env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

process.on('unhandledRejection', (error) => {
  console.error(error);
});
