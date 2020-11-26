//----------correct one used var
var b = 100;

if (true) {

    var b = 80;
}
console.log(b); // expected out put 80

//------ correct one Using let
let a = 100;

if (true) {

    let a = 80;
}
console.log(a); // expected out put 100


//error
//---------------------------
if (true) {
    let a = 80;
}
console.log(a); //error

