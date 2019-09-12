
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

exports.getPosts = (req, res) => {
    res.send("hey what up from express!");
}