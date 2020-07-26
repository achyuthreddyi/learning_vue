const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

//get posts
router.get('/', async (req,res) =>{
    
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
})

// add posts
router.post('/',async(req,res) =>{
    const posts = await loadPostCollection();
    await posts.insertOne({
        text : req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();

})

// delete posts

router.delete('/:id' , async(req, res) =>{
    const posts = await loadPostCollection();
    await posts.deleteOne({_id:new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
})


async function loadPostCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://achyuth:achyuth@demo.xlnni.mongodb.net/demo?retryWrites=true&w=majority',{
        useNewUrlParser:true,useUnifiedTopology: true
    })
    return client.db('vue_express').collection('posts');
}

module.exports = router;