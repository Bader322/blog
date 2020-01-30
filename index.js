

const path = require('path');
 
const express = require('express');
 
const app = express();
 
const edge = require('edge.js')

app.use(express.static('public'));
 



app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});


app.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

// Routes, nav bar links






app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname+ '/pages/contact.html'));
});

app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname+ '/pages/post.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname+ '/pages/about.html'));
});
 
app.listen(3000, () => {
    console.log('App listening on port 3000')
});