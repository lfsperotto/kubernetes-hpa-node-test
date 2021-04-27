const os = require('os');
const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(' You are in container ' + os.hostname());
}

const server = http.createServer(requestListener);
server.listen(80);