interface Matchable{
    name: string
    isCompatibleWith: (testName:string)=> boolean
}

var sillyObject: Matchable = {
    name: "Same String",
    isCompatibleWith: (testName: string): boolean => {
        return testName.length > 0 && testName.substr(0,1) !="R"
    }
}

console.log('====================================');
console.log(sillyObject.isCompatibleWith("Sample"));
console.log('====================================');


console.log('====================================');
console.log(sillyObject.isCompatibleWith("Rambo"));
console.log('====================================');

class SmartCar implements Matchable{
    constructor(newName: string, newId: string) {
        this.id = newId,
        this.name = newName
}

    id: string
    name: string
    isCompatibleWith(testName: string): boolean{
        return testName.length > 0 && testName.substr(0,1) != "J"
    }
}

const smartObject = new SmartCar("Cpsds","ROL")

console.log('====================================');
console.log(smartObject.isCompatibleWith("Jupiter not book"));
console.log('====================================');

