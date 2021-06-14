const task = "Given 2 arrays: ['a', 'b', 'c'] and [1, 2, 3]. Combine them into one. Add elements 111 to it at the end";

console.log("\n  4.1:", task);

const arr0 = ["a", "b", "c"];
const arr1 = [1, 2, 3];

const combined = [...arr0, ...arr1]; // or arr0.concat(arr1)
combined.push(111);

console.log("arr =", combined);