const express = require('express');
const router = express.Router();

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
        res.send('pass');
    }
});



module.exports = router;