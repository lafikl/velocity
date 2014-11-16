var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Velocity - PerfBar',
    user: req.session.user
  })
})

router.get('/login', function(req, res) {
  res.render('login', { title: 'Velocity - PerfBar' })
})

router.post('/login', function(req, res) {
  var users = require("../users")
  users.login(req, function(err, user) {
    if ( err ) return res.redirect('/login')
    res.redirect('/')
  })
})


router.get('/logout', function(req, res) {
  delete req.session.user
  res.redirect('/')
})



module.exports = router
