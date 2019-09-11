const express = require('express')
const app = express()

// bring in routes
// const postRoutes = require ('./routes/post')
const {getPosts} = require ('./routes/post')
// use get method, (req, res) is callback function
app.get('/', getPosts);

const port = 8080
app.listen(port, () => {console.log(`A nodejs server is listening on port: ${port}`)});