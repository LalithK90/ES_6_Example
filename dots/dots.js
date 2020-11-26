function count(number) {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        count += number[i];
    }
    return count;
}

console.log(count(1, 434, 45, 343, 534, 53543, 354, 4543));

function countOne(...number) {
    console.log(number)
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        count += number[i];
    }
    return count;
}

console.log(countOne(1, 434, 45, 343, 534, 53543, 354, 4543));

let numberList = [1, 434, 45, 343, 534, 53543, 354, 4543];

console.log(Math.max(numberList));
console.log(...numberList);
console.log(Math.max(...numberList))

