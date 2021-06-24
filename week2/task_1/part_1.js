const task = `Find the average age:
[ { gender: "male", age: 22, }, { gender: "female", age: 20, }, { gender: "male", age: 32, } ]`;

console.group("1.1:");
console.log(task);

const users = [ { gender: "male", age: 22, }, { gender: "female", age: 20, }, { gender: "male", age: 32, } ];

let averageAge = users.reduce((sum, cur) => sum + cur.age, 0) / users.length;
console.log("averageAge =", averageAge);

console.groupEnd("1.1:");