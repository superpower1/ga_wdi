const express = require('express');
const app = express();
const apiController = require('./apiController')

const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
// You can run any functions in the middle of the routing pipeline
app.use((req, res, next)=>{
  console.log(`request: ${req.path}`);
  // next is necessary here, otherwise, this will be the end point
  next();
})

app.get('/', (req,res) => {
  res.send('Hello express');
})

app.get('/about', (req,res) => {
  res.render('about');
})

app.get('/api/places', apiController.showPlaces)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
