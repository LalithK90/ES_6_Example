"use strict";
const showState = (person) => {
    return person.name + " is " + (person.isHungry ? " hungry" : "not hungry");
};
let saman = {
    name: "Saman",
    //optional 
    // isHungry: true,
    children: ["Kamal", "Nimal"]
};
console.log(showState(saman));
