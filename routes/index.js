var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Homepage',
    user: req.session.user
  });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.get('/logout', function(req, res) {
  delete req.session.user
  res.redirect('/')
});

router.post('/login', function(req, res) {
  var users = require("../users");
  users.login(req, function(err, user) {
    if ( err ) return res.redirect('/login');
    res.redirect('/');
  });
});


module.exports = router;
