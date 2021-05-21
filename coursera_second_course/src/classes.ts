//default all methods and parameters are public 
class Greeting{
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return "Hello "+ this.greeting
    }
}

let greeter = new Greeting("How are you ?")
console.log(greeter.greet());

//super() example 

class Animal {
    name: string
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log("moved "+ distanceInMeters + " meters");
        
    }
}

class Snak extends Animal{
    constructor(name:string) {
        super(name)
    }
    move(distanceInMeters = 5) {
        super.move(distanceInMeters);
}

}

let snake = new Snak("Python")
console.log(snake.move());

//private

// class AnimalOne {
//    private name: string
//     constructor(theName: string) {
//         this.name = theName
//     }
//     move(distanceInMeters: number = 0) {
//         console.log("moved "+ distanceInMeters + " meters");
        
//     }
// }


class AnimalOne {
   protected name: string
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log("moved "+ distanceInMeters + " meters");
        
    }
}

class Rhino extends AnimalOne{
    constructor() {
        super("Rhino")
    }
    getAnimalName() {
    return ` This Animal One Instance has a name of ${this.name}`
}

}
let kitty = new AnimalOne("Cat")
// can not able to get name 
//kitty.name
let keyGetName = new Animal("Puss")
console.log(keyGetName.name);

//but after use super method access protected one
let rhino = new Rhino
//can not be access 
//rhino.name
console.log(rhino.getAnimalName());


class AnimalTwo {
   protected name: string
    protected constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log("moved "+ distanceInMeters + " meters");
        
    }
}

class RhinoTwo extends AnimalTwo{
    constructor() {
        super("Rhino")
    }
    getAnimalName() {
    return ` This Animal One Instance has a name of ${this.name}`
}

}
// can not able to create this becox  now  constructor parameter also protected
//let kitty = new AnimalTwo("Cat")



//but after use super method access protected one
let rhinoTwo = new RhinoTwo
//can not be access 
//rhino.name
console.log(rhinoTwo.getAnimalName());



