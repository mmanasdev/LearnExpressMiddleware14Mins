const express = require('express');
const app = express();

app.use(express.json());

 app.use(logger);

// app.get('/', (req, res, next) => {
//   console.log('Home Page');
//   res.send('Home Page');
//   next();
// });

app.get('/', auth, (req, res) => {
  console.log('Home Page');
  res.send('Home Page');
});

app.get('/users', auth, (req, res) => {
  console.log(`User is admin = ${req.admin}`);
  console.log('Users Page');
  res.send('Users Page');
});

// app.use(logger);

function logger(req, res, next) {
  console.log(req.originalUrl);
  console.log('before')
  next();
  console.log('after')
}

function auth(req, res, next) {
  if (req.query.admin === 'true') {
    req.admin = true;
    next(); 
    return
  } 
  res.send('No auth');
  
}



const PORT = process.env.PORT || 3000;
app.listen(PORT); 