exports.login = function(req, cb) {
  var user
  users.forEach(function(u) {
    if ( u.username == req.body.username &&
         u.password == parseInt(req.body.password, 10) )
      user = u
  })
  if (!user) return cb(new Error('No user found.'), user)

  delete user.password
  req.session.user = user
  cb(false, user)
}


var users = [
  {
    username: "lafikl",
    group: "staff",
    password: 123123
  },
  {
    username: "souders",
    group: "users",
    password: 123123
  }
]