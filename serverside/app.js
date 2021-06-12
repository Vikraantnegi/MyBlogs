const express = require('express');
const Blog = require('./api/models/blogs')
const BlogData = new Blog();

const app = express();

app.get('/life', (req, res) => {
    res.status(200).send('Hey Bloggers!')
})

app.get('/api/blogs', (req, res) => {
    res.status(200) ? res.send(BlogData.getAll()) : res.send('Some Error occured')
})

app.get('/api/blogs/:id', (req, res) => {
    const BlogId = req.params.id;
    const blog = BlogData.getBlog(BlogId);
    
    blog ? res.status(200).send(BlogData.getBlog(BlogId)) : res.status(404).send('No such blog there')
})

app.listen(3000, () => {
    console.log('Listening on localhost:3000')
})
 