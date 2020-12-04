const authMiddleware= require('../middleware/auth');
const express = require ('express');

const Post = require('../models/post');

const router = express.Router();

// router.use(authMiddleware);

// router.get('/posts', async (req, res) => {
//   try{
    
//     const posts = await Post.find();

//     return res.send ({ posts })
//   }catch(err){
//     return res.status(400).send({ error : 'Error loading posts'});
//   }

router.get('/lastPosts', async (req, res)=> {
  const posts = await Post.find({}).sort({ createdAt: -1 }).limit(5);

  return res.json(posts);

});

router.get('/posts', async (req, res) => {
    const { page = 1 } = req.query;
    const posts = await Post.find().sort({ createdAt: -1 }).limit(5);

    // const posts = await Post.paginate({}, { page, limit: 4, sort: { createdAt: -1 } });
    // const posts = await Post.find();
    return res.json(posts);
  }
);

router.post('/post', async (req,res)=>{
  try{
    const post = await Post.create({...req.body})

    return res.send ({ post });

  } catch (err){
    return res.status(400).send({ error : 'Error creating new post'});
  } 

});

router.put('/:postId', async (req,res)=>{
  try{
    const post = await Post.findByIdAndUpdate(req.params.postId,{
      title,
      content
    }, {new:true});

    return res.send ({ post });

  } catch (err){
    return res.status(400).send({ error : 'Error creating new post'});
  } 

});

router.delete('/:postId', async (req,res)=>{
  try{
    await Post.findByIdAndRemove(req.params.postId);

    return res.send();
  } catch (err){
    return res.status(400).send({ error : 'Error deleting post'});
  } 
});

module.exports = app => app.use('/posts', router );