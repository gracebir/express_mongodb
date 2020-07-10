const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const postRoute = require('./routes/post');
const userRoute = require('./routes/user');
const Route = require('./routes/index');
const flash = require('connect-flash');
const session = require('express-session');




app.use(expressLayouts)
app.set('view engine','ejs');
app.use('/',Route);
app.use(express.urlencoded({ extended: true }));

// express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  // middleware for connect flash 
app.use(flash())

// Global Vars
app.use((req,res, next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})

app.use('/blog',postRoute);
app.use('/user', userRoute);


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server listen on ${port}....`));