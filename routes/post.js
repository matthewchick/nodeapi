
/*
function getPosts(req, res) {
    res.send("hey what up from express");
} */
/*
const getPosts = (req, res) => {
    res.send("hey what up from express");
}

module.exports = {
    getPosts
};
*/
// past controller to express router whi
const express = require('express');
const postController = require ('../controllers/posts');

const router = express.Router();
router.get("/", postController.getPosts);

module.exports = router;
