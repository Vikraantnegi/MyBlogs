const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.status(200).send("Hey Bloggers")
})

app.listen(3000, () => {
    console.log('Listening on localhost:3000')
})