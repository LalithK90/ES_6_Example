class Student {
//first example
//     constructor() {
//         this.name = 'Saman Bandara'
//     }
    constructor(name) {
        this.name = name;
    }

    ready() {
        console.log("\nBest Reading Ability");
    }
}

//first example
// let saman = new Student();
// saman.ready();
// console.log(saman.name);


let nilanga = new Student('Nilanga');
console.log(nilanga.name);