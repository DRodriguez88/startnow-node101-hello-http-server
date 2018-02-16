var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
}).listen(8080);
console.log('Server running at http://localhost:8080');
var globalLog = require('global-request-logger');
globalLog.initialize();
globalLog.on('success', function(request, response) {
    console.log('SUCCESS');
    console.log('Request', request);
    console.log('Response', response);
  });