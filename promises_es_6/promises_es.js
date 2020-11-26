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

let myPro = new Promise(function (resolve, reject) {
    setTimeout(function () {
            resolve("SAMAN");
        },
        1000);
});
myPro.then(function (val) {
    console.log(val);
})