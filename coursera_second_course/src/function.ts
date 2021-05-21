const sum = (num: number, num2: number): number => {
    return num + num2;
}

console.log(sum(3, 2));

const sum2 = (num: number | string, num2: number | string): number => {
    typeof num == 'string' ? num = parseInt(num) : null
    typeof num2 == 'string' ? num2 = parseInt(num2) : null
    
    return num + num2;
}

console.log(sum2("34", 45));


const sum3 = (num: number | string, num2: number | string): void => {
    typeof num == 'string' ? num = parseInt(num) : null
    typeof num2 == 'string' ? num2 = parseInt(num2) : null
    console.log(num + num2);
}

console.log(sum3("34", 50));



const sum4 = (num: number | string, num2: number | string): void => {
   console.log("error in the system");
   
}

const n: null = null
const u: undefined = undefined


