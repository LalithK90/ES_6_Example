interface PersonState{
    name: string;
    // ? is represent in optional 
    isHungry?: boolean;
}

const showState = (person: PersonState) => {
    return person.name + " is "+ (person.isHungry ? " hungry" : "not hungry")
}

let saman: PersonState = {
    name: "Saman",
    //optional 
    // isHungry: true,
    children : ["Kamal","Nimal"]
}

console.log(showState(saman));
