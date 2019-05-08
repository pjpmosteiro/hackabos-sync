const http = require('http');

let request_counter = 0;

const server = http.createServer((request, response) => {
  request_counter = request_counter + 1;

  let res = 'hola mundo!!!';

  if (request.url === '/berto') {
    res = 'ola berto!!';
  }
  response.writeHead(200, {
    'Content-type': 'text/html'
  });
  response.end('<p>' + res + '</p><p>REQUEST:' + request_counter + '</p>');
});

server.listen(8000);
