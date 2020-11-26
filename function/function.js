function print() {
    console.log(" Normal funtion");
}

print();

var sampleFuntion = () => {
    console.log("I am an arrow function");
}

sampleFuntion();

var addMe = () => {
    let a = 200;
    let b = 100;
    return a + b;
}
console.log(addMe());

var addMeOne = (a, b) => {
    return a + b;
}
console.log(addMeOne());

var addMeTwo = (a, b) => a + b;
console.log(addMeTwo());