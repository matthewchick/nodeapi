const express = require('express');
const app = express();
// morgan is a middleware that allows us to easily log requests, errors, and more to the console.
const morgan = require("morgan");  //middleware
const dotenv = require('dotenv');
dotenv.config()

// bring in routes
// const postRoutes = require ('./routes/post')
const postRoutes = require ('./routes/post')

const myOwnMiddleWare = (req, res, next) => {
    console.log("middleware applied now!");
    next();
}
// middleware
app.use(morgan("dev"));
//app.use(myOwnMiddleWare);

// use get method, (req, res) is callback function
app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`A nodejs server is listening on port: ${port}`)});