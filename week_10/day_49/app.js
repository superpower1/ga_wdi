const _=require('underscore')

const fruits = ['apple', 'orange', 'banana']

console.log(_.sample(fruits));

const request = require('request');
request('http://www.omdbapi.com/?apikey=2f6435d9&t=star', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.dir(JSON.parse(body), {depth:5});
});
