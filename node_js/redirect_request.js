const http = require("http");
//for third way
const fs = require("fs");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, respose) => {
    console.log("url "+request.url+" mehod "+ request.method);
    respose.setHeader("Content-Type", "text/html");
    let path = './html_content/';
    switch (request.url) { 
        case '/':
            path += 'index.html';
    respose.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
    respose.statusCode = 200;
            break;
        default:
            respose.setHeader("Location", "/");
    respose.statusCode = 301;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) { 
            console.error(err);
            respose.end();
        } else {
            respose.end(data);
        }
    });
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Sever is runnig ${PORT}`);
});