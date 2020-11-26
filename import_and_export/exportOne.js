//---- Basic export
// export let valueOne = 400;
//
// export function cardFee() {
//     console.log(" export one")
// }


//-----other way to export
let valueOne = 400;

function cardFee() {
    console.log(" export one")
}
let name= 'Asanka';

export {valueOne,cardFee};
export default name;