const express = require('express')
const router = express.Router();
const mongodb = require('../server/index');
router.get('/',(req,res)=>{
    res.send("<h1>Hello world !!!</h1>")
});




module.exports = router;