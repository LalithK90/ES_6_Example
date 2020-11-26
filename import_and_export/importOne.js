//import {valueOne, cardFee} from './exportOne.js'; -> One way to import
// import {valueOne} from './exportOne.js';  |
// import {cardFee} from './exportOne.js';   |-> Other way to import
// import name from './exportOne.js';        |

// import name, {valueOne,cardFee} from "./exportOne.js";  |
// import name, {valueOne,cardFee} from "./exportOne";     |-> another way to import

// console.log(valueOne);
// cardFee();
// console.log(name);


import * as values from "./exportOne";


console.log(values);
console.log(values.valueOne);
values.cardFee();
console.log(values.default);