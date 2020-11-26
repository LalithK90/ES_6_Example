var getData = (temp = 2, cold) => {
    console.log(temp)
    console.log(cold)
    if (temp < cold) {
        console.log("Cold")
    } else {
        console.log("No cold")
    }
}
console.log(getData(3))
console.log(getData(3,4))
console.log(getData(6,3))
console.log(getData(6,19))

var getDataTest = (temp = cold, cold =2) => {
    console.log(temp)
    console.log(cold)
    if (temp < cold) {
        console.log("Cold")
    } else {
        console.log("No cold")
    }
}
console.log(getDataTest(3))
console.log(getDataTest(3,4))