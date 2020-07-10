const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const postRoute = require('./routes/post');
const userRoute = require('./routes/user');
const Route = require('./routes/index');
const bodyParser = require('body-parser');




app.use(expressLayouts)
app.set('view engine','ejs');
app.use('/',Route);
app.use(express.urlencoded({ extended: true }));
app.use('/blog',postRoute);
app.use('/user', userRoute);


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server listen on ${port}....`));