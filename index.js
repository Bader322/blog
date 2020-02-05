

const path = require('path');
const express = require('express');
const app = new express();
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
app.use(express.static('public'));
app.use(expressEdge.engine);



// Routes, nav bar links
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.get('/post', (req, res) => {
  res.render('post');
});



 
app.listen(3000, () => {
    console.log('App listening on port 3000')
});