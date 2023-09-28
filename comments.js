//Create web server with Express
//npm install express --save
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var fs = require('fs');
//npm install cors --save
var cors = require('cors');
app.use(cors());
//npm install mongoose --save
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments');
var Comment = mongoose.model('Comment', {author: String, text: String});
//npm install nodemon --save
//nodemon server.js
//npm install mongodb --save
//npm install mongoose --save
//npm install body-parser --save
//n
