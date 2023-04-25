const express = require('express')
const router = express.Router()
const authController = require('../controllers/routines')
const passport = require('passport');



router.get('/auth/google',  passport.authenticate(
    'google',
    {
        scope: ['profile', 'email'],
    }
))
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/routines',
      failureRedirect: '/'
    }
))
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/');
    });
});


module.exports = router;