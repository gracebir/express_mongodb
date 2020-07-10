const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/User');

// login
router.get('/login',(req,res)=>{
    res.render("login");
});

// login
router.get('/register',(req,res)=>{
    res.render("register");
});

router.post('/register',(req,res)=>{
    const { name, email, password, password2 } = req.body;
    let errors = [];
    // validation
    if(!name || !email ||!password || !password){
        errors.push({msg: 'Please fill all the field'})
    }



    if(password !== password2){
        errors.push({msg: 'password do not match'});
    }



    if(password.length < 6 ){
        errors.push({msg: 'Password must have at least 6 caracter'});
    }

    if(errors.length > 0) {
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
    } else { 
        // Validation passed
        UserModel.findOne({email: email})
        .then(user =>{
            if(user){
                errors.push({ msg:'Email is already registered'});
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else{
                const newUser = new UserModel({
                    name,
                    email,
                    password
                });
            // Hash passowrd
            bcrypt.genSalt(10, (err, salt)=>
            bcrypt.hash(newUser.password,salt, (err,hash)=>{
                if(err) throw err;
                // Set password to hash
                newUser.password = hash;
                // Save the use
                newUser.save()
                .then(user =>{
                    req.flash('success_msg', 'You are register and you can login')
                    res.redirect('/user/login');
                })
                .catch(err => console.log(err));
            }))
            }
        });
    }
});



module.exports = router;