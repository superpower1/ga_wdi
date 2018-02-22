const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', (req, res)=>{
  res.send('hello');
})

app.get('/api/peeps', (req, res)=>{
  res.json(['Heelo', 'AHAl', 'Groot']);
})

app.listen(5000);
