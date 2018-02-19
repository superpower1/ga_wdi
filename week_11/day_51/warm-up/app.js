
const express = require('express');
const app = express();

const homeController = require('./controllers/homeContoller');
const weatherApi = require('./controllers/weatherApi')

const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', homeController);
app.get('/api/weather', weatherApi);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
