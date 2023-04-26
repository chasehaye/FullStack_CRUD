//validates user is logged in if not redirects to google login
module.exports = function(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }