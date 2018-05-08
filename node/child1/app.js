'use strict';

const express = require('express');
const myParser = require("body-parser");

var Client = require('mariasql');
// Constants
const PORT = 3333;
const HOST = '0.0.0.0';



// App
const app = express();
app.use(myParser.urlencoded({extended : true, limit: '50mb'}));

// Static files

app.use('/static', express.static('../images/'))
app.use('/thumbs', express.static('../thumbs/'))

// gets

app.get('/', (req, res) => {

  res.send("child1");

});

app.get('/child1', (req, res) => {

  res.send("child1/child1");

});
//server start
app.post('/', (req, res) => {

  console.log(req.body);
  res.send("child1 post")

});



app.listen(PORT, HOST);
console.log(`Running server on http://${HOST}:${PORT}`);
