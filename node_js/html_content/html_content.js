const http = require("http");
//for third way
const fs = require("fs");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
//one way write html one browser
// const server = http.createServer((request, respose) => {
//     respose.statusCode = 200;
//     respose.setHeader("Content-Type", "text/plain");
//     respose.write("sapme")
//     respose.end("The end");
// });

//two way write html one browser
// const server = http.createServer((request, respose) => {
//     respose.statusCode = 200;
//     respose.setHeader("Content-Type", "text/html");
//     respose.end(`<h2>Sample Header</h2>`);
// });

// server.listen(PORT, HOSTNAME, () => {
//     console.log(`Sever is runnig ${PORT}`);
// });

//three way write html one browser
// const server = http.createServer((request, respose) => {
//     console.log("url "+request.url+" mehod "+ request.method);
//     respose.statusCode = 200;
//     respose.setHeader("Content-Type", "text/html");
//     fs.readFile("./index.html", (err, data) => {
//         if (err) { 
//             console.error(err);
//             respose.end();
//         } else {
//             respose.end(data);
//         }
//     });
// });

// server.listen(PORT, HOSTNAME, () => {
//     console.log(`Sever is runnig ${PORT}`);
// });

//three way write html one browser according to request (routing)
const server = http.createServer((request, respose) => {
    console.log("url "+request.url+" mehod "+ request.method);
    respose.statusCode = 200;
    respose.setHeader("Content-Type", "text/html");
    let path = './';
    switch (request.url) { 
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
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