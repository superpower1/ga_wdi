const http = require('http')

const app = (request, response) => {
  const path = request.url

  console.log(`Recieved a request from ${path}`);
  response.write('hello from server');
  response.end();
}

const server = http.createServer(app)

server.listen(8080, ()=>{
  console.log('Server running on port: 8080');
})
