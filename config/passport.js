const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('../server/index');
const bcrypt = require('bcryptjs');


// load user Model
const UserModel = require('../models/User');

module.exports = function(passport){
    passport.use(
        new LocalStrategy({ usernameField: 'email'},(email,password,done) =>{
            // Match user
            UserModel.findOne({ email: email})
            .then(user=>{
                if(!user){
                    return done(null, false, { message: 'That email is not registered'});
                }
                // Match password
                bcrypt.compare(password, user.password,(err, isMatch)=>{
                    if(err) throw err;
                    if(isMatch){
                        return done(null, user);
                    } else{
                        return done(null, false, {message:'password incorrect'})
                    }
                })
            }) 
            .catch(err=> console.log(err));
        })
        
    );
    passport.serializeUser((user, done) =>{
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) =>{
        UserModel.findById(id, (err, user)=> {
          done(err, user);
        });
      });
}
