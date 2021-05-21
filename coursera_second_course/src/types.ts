console.log("Hello World");

//one way
let myString: string = "Hello Lalith";
console.log(myString);

// second way
let secondWay: string
secondWay = "sample two"
console.log(secondWay);


let myNumber: number = 45
console.log(myNumber);

let myHexaNumber: number = 0xf04
console.log(myHexaNumber);

let myBoolean: boolean = true
console.log(myBoolean);

let myAny: any = []
console.log(myAny);

let myAnyNum: any = -4
console.log(myAnyNum);

//Array

let strArray: string[] = ["o", "sds", "sd"]
console.log(strArray);

let numArray: number[] = [12, 2, 12, 2]
console.log(numArray);

let booArray: boolean[] = [true, false, true, true]
console.log(booArray);

//tuple : can not change variable mentioned order
let strNumTuple: [string, number, boolean, number] = ["name", 23, true, 32]
console.log(strNumTuple);

//union : this is most useful when if we do not know about variable type 
let myUnion: string | number

myUnion = "1212"
//string value add
console.log(myUnion);
//number value add
myUnion = 23
console.log(myUnion);

//function







