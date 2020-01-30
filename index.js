

const path = require('path');
const express = require('express');
const app = new express();
const expressEdge = require('express-edge');

app.use(express.static('public'));
app.use(expressEdge.engine);
// app.set('views', __dirname + '/views');



app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Routes, nav bar links

// app.get('/', (req, res) => {
//   res.render('index.edge');
// });


// app.get('/index', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'pages/index.html'));
// });



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