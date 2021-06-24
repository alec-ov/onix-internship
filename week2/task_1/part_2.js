/*
1.2 Fix this code

const object = {
  a: 'somestring',
  b: 42,
  c: false,
  k: 11,
};
const numbers = [];

Object.keys(object).forEch((item) => {
	if (typeof object[item] === Number) {
	numbers.pipe(object[item]);
 }
});

console.log(numbers);
// expected output: Array [42, 11]
*/

const object = {
	a: "somestring",
	b: 42,
	c: false,
	k: 11,
};
const numbers = [];

Object.keys(object).forEach((item) => {
	if (typeof object[item] === "number") { // typeof returns string, Number is an object.
		numbers.push(object[item]); // Array.pipe() is not a function
	}
});
console.group("1.2:");
console.log(numbers);
console.groupEnd("1.2:");
// expected output: Array [42, 11]