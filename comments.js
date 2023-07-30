//create a web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require("fs");
const port = 3000;
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');
//app.use(express.static('public'));
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
var data = fs.readFileSync("comments.json");
var comments = JSON.parse(data);
//get data from json file
app.get('/comments', function (req, res) {
    res.render('comments', { comments: comments });
});
//post data to json file
app.post('/comments', function (req, res) {
    var newComment = {
        name: req.body.name,
        comment: req.body.comment,
    };
    comments.push(newComment);
    var data = JSON.stringify(comments);
    fs.writeFileSync('comments.json', data, finished);
    function finished(err) {
        console.log('all set.');
    }
    res.redirect('/comments');
});
//create a web server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));