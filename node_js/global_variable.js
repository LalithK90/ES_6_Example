console.log(__filename);
console.log(__dirname);

console.log(globalString); // Output: "This can be accessed anywhere!"

globalString = "Check me out now";
console.log(globalString); // Output: "Check me out now"

globalString = undefined;
console.log(globalString); // Output: undefined