function increaseInterest(percentage: number) {
    console.log("change "+ percentage+" %");
}
    
increaseInterest(1)

function increaseInterestOne(percentage: number, principal?:number):boolean {
    console.log("change " + percentage + " %");
    if (principal) {
    console.log("Principal = "+ principal * (1+percentage/100));
    
}

    return percentage > 0;
}
    
increaseInterestOne(1.3,100)