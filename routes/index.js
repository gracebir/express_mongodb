const express = require('express');
const router = express.Router();
const { forwardAuthenticated,ensureAuthenticated } = require('../config/auth');

// router.get('/',(req,res)=> res.render('welcome'));

// router.get('/dashboard',(req,res)=> 
// res.render('dashboard',{
//     name: req.user.name
// }));


// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.users
  })
);


module.exports = router;