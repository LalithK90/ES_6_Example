const http = require("http");

http.createServer((request, respose) => {
    respose.statusCode = 200;
    respose.setHeader("Content-Type", "text/plain");
    respose.write('Some Html ');
    respose.end();
}).listen(3000, () => {
console.log("Server runnig ......");    
});
