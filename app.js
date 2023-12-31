const http = require('http');
const os = require('os');

console.log("Moringa-Devops Test server starting...");

var requestCount = 0;

var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    requestCount++;
    if (requestCount > 5) {
        response.writeHead(500);
        response.end("This particular Moringa school server is not okay. Please restart me! I'm server number 6/6");
        return;
    }
    response.writeHead(200);
    response.end("This Moringa school test server is okay, keep testing" + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
