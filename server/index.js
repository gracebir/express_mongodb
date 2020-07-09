const mongoose = require('mongoose');
require('dotenv/config');


mongoose.connect(toString(process.env.DB_CONNECTION),
{useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{
    console.log('yes we are connected now');
});


module.exports = mongoose;