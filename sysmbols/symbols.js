let sym1 = Symbol();
console.log(sym1);
console.log(sym1.toString());

let sym2 = Symbol('Saman');
let sym3 = Symbol('Saman');

console.log(sym2 === sym3);

let obj = {
    l_name: "Saman",
    f_name: "Bandara",
    [sym1]: 1223
}

console.log(obj);
console.log(obj[sym1]);

const N_KEY = Symbol();
let obj1 ={};
obj1[N_KEY] = 8983;
console.log(obj1[N_KEY]);

