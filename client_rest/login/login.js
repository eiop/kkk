const express = require('express')
const var_dump = require('var_dump')
var _ = require('lodash');
const app = express()
const port = 4000

const User = [
  {
    id: '11',
    username: 'aa@aa.aa',
    password: 'aa'
  }, {
    id: '12',
    username: 'saaa@aa.aa',
    password: 'aaa'
  }
];

app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));


var passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
  {
    usernameField: 'emailhidd',
    passwordField: 'passwd'
  },
  function (username, password, done) {
    getuser = _.filter(User, { username: 'aa@aa.aa' })
    if (getuser.length == 0) { return done('i cant found'); }
    if (getuser.length == 0) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    return done(null, getuser);
  }
))
passport.serializeUser(function (User, cb) {
  cb(null, User.id);
});

passport.deserializeUser(function (id, cb) {
  getuser = _.filter(User, { username: 'aa@aa.aa' })
  
    
    cb(null, getuser);
  
});
app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
  passport.authenticate('local',
    {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })
  , (req, res) => res.send('Hello World!')
);


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))