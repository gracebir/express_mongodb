const express = require('express');
const app = express();
const postRoute = require('./routes/post');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/',postRoute);


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server listen on ${port}....`));