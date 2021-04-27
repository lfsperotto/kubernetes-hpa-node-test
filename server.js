const sqrt = require('sqrt');
const os = require('os');
const http = require('http');

const requestListener = function (req, res) {
    
    var x = 0.0001;

    for (i = 0; i <= 1000000; i++){
        x += sqrt(x);
    }

    res.writeHead(200);
    res.end(' You are in container ' + os.hostname());

}

const server = http.createServer(requestListener);
server.listen(80);