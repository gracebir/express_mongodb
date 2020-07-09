const express = require('express');
const app = express();
const postRoute = require('./routes/post');



app.use('/post',postRoute);


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server listen on ${port}....`));