/*
function asyncFun() {
    return new Promise(
        function (resolve,reject){
            resolve(result);
            reject(error);
        }
    )
}
asyncFun()
.then(result)
.catch(error);
*/

// let myPro = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//             resolve("SAMAN");
//         },
//         1000);
// });
// myPro.then(function (val) {
//     console.log(val);
// });

//==========API call====
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function testCall(url) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        }
        request.onerror = function () {
            reject(Error('Network Error'));
        }
        request.send();
    });
}


testCall('https://randomuser.me/api')
    .then(function (response) {
        console.log('Harry   ' + response);
    }, function (error) {
        console.log(error)
    })