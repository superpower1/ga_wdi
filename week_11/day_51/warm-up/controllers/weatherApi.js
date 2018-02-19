const request = require('request');
const key = process.env.OPEN_WEATHER_MAP_KEY;

const renderHome = (req, res) => {
  let result = {};
  request(`http://api.openweathermap.org/data/2.5/weather?lat=${req.param('lat')}&lon=${req.param('lon')}&units=metric&appid=${key}`, function (error, response, body) {
    if (JSON.parse(body).main) {
      result = JSON.parse(body);
      res.send(result);
    } else {
      console.log("City not found");
    }
  });
}

module.exports = renderHome;
