"use strict";
const sum = (num, num2) => {
    return num + num2;
};
console.log(sum(3, 2));
const sum2 = (num, num2) => {
    typeof num == 'string' ? num = parseInt(num) : null;
    typeof num2 == 'string' ? num2 = parseInt(num2) : null;
    return num + num2;
};
console.log(sum2("34", 45));
const sum3 = (num, num2) => {
    typeof num == 'string' ? num = parseInt(num) : null;
    typeof num2 == 'string' ? num2 = parseInt(num2) : null;
    console.log(num + num2);
};
console.log(sum3("34", 50));
const sum4 = (num, num2) => {
    console.log("error in the system");
};
const n = null;
const u = undefined;
