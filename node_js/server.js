const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;



const server = http.createServer((request, respose) => {
    respose.statusCode = 200;
    respose.setHeader("Content-Type", "text/plain");
    respose.end("Hello World");
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Sever is runnig ${PORT}`);
});