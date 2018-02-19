const request = require('request');
const key = process.env.OPEN_WEATHER_MAP_KEY;
let location = 'Melbourne';

const renderHome = (req, res) => {
  let result = {};
  request(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`, function (error, response, body) {
    if (JSON.parse(body).main) {
      result = JSON.parse(body);
      res.render('index', {
        result
      })
    } else {
      console.log("City not found");
    }
  });
}

module.exports = renderHome;
