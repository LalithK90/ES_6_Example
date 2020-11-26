let saman = {
    f_name:'Saman',
    l_name:'Bandara'
}
let kamal = {
    f_name:'Kamal',
    l_name:'Bandara One'
}
let nimal = {
    f_name:'Nimal',
    l_name:'Kumara'
}
let kumara = {
    f_name:'Kumara',
    l_name:'Anuja One'
}
let people = new Map();
people.set('first',saman);
people.set('second',kamal);
people.set('third',nimal);
people.set('fourth',kumara);

console.log(typeof people);
console.log(people);
console.log(people.size);

console.log(people.get('third'));

console.log(people.keys())

for (key of people.keys()){
    console.log(key)
}

for (value of people.values()){
    console.log(value)
}

for (value of people){
    console.log(value)
}

for (value of people.entries()){
    console.log(value)
}