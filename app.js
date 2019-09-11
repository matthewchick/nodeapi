const express = require('express')

const app = express()

// use get method, (req, res) is callback function
app.get('/', (req, res) => {
    res.send("hey what up from express");
})

const port = 8080
app.listen(port, () => {console.log('A nodejs server is listening on port 8080')});