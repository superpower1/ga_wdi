
const showPosition = position => {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const options = {
    url: '/api/weather',
    method: 'get',
    data: {
      lat,
      lon
    }
  }
  $.ajax(options).done(res=>{
    console.log(res);
    $(".weather-icon").attr("src",`http://openweathermap.org/img/w/${res.weather[0].icon}.png`);
    $('.temp').text(res.main.temp );
    $('.location').text(res.name);
  });
}

navigator.geolocation.getCurrentPosition(showPosition);
