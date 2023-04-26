//validates user is logged in if not redirects
module.exports = function(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }