const task = `Given an array ['learn', 'css', 'nodejs'].
Use shift, pop to display the first and last element.
Create new array which have two elements ['learn', 'nodejs'].`;

console.log("\n  4.3:", task);

const arr = ["learn", "css", "nodejs"];
const bounding_arr = [arr.shift(), arr.pop()];

console.log("result =", bounding_arr, "original =", arr);