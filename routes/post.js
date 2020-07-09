const express = require('express')
const router = express.Router();
const Posts = require('../models/Post');

router.get('/',async (req,res)=>{
    try{
       const posts = await Posts.find();
       res.json(posts);
    }
        catch(err){
            res.json({message:err});
        }
});


router.get('/:id',async (req,res)=>{
    try{
       const posts = await Posts.findById(req.params.id);
       res.json(posts);
    }
        catch(err){
            res.json({message:err});
        }
});

router.post('/post',async (req,res)=>{
    const add = new Posts({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const SavePost = await add.save();
    res.json(SavePost);
    }
    catch(err){
        res.json({message:err});
    }
});


router.patch('/put/:id',async (req,res)=>{
    try{
       const posts = await Posts.updateOne({_id:req.params.id},{$set:{title: req.body.title}});
       res.json(posts);
    }
        catch(err){
            res.json({message:err});
        }
});


router.delete('/delete/:id',async (req,res)=>{
    try{
       const posts = await Posts.remove({_id:req.params.id});
       res.json(posts);
    }
        catch(err){
            res.json({message:err});
        }
});



module.exports = router;