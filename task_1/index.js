// 1.1
// Given the variables a = 10 and b = 3. Find the remainder of dividing a by b.
{
	let a = 10;
	let b = 3;

	console.log("\n  1.1:\n10 % 3 =", a % b);
}

// 1.2
// Reduce 2 to 10 degrees. Write the result in the variable st.

console.log("\n  1.2:", "__");

// 1.3
// Display a random integer from 1 to 100.
/// Assuming n ∈ [1; 100)

/**
 * Generates a random integer n(n >= min, n < max)
 * @param {number} min 
 * @param {number} max 
 * @returns {number} A random integer in [min, max)
 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log("\n  1.3:");
console.log("rand[1, 100) =", getRandomInt(1, 100));
console.log("rand[10, 20) =", getRandomInt(10, 20));
console.log("rand[-1, 1) =", getRandomInt(-1, 1));

// 1.4*
// Given an array arr. Find the arithmetic mean of its elements. Check the problem on the array [12, 15, 20, 25, 59, 79].

/**
 * Calculates the average (arithmetic mean) of an array
 * @param {number[]} arr array of numbers
 * @returns {number}
 */
function calcAverage(arr) {
	return arr.reduce((sum, cur) => sum + cur) / arr.length;
}

{
	const sampleArr = [12, 15, 20, 25, 59, 79];
	const sampleArr1 = [10, 20];
	const sampleArr2 = [-100, 90];

	console.log("\n  1.4*:");
	console.log(sampleArr, "avg =", calcAverage(sampleArr));
	console.log(sampleArr1, "avg =", calcAverage(sampleArr1));
	console.log(sampleArr2, "avg =", calcAverage(sampleArr2));
}

// 1.5*
// Write a function that takes the number n and displays in the console a series of Fibonacci to the number n

/**
 *
 * @param {number} n position of the last Fibonacci element to be included
 * @returns {number[]} array of Fibonacci numbers up to(including) n-th
 */
function Fibonacci(n) {
	let cur = 0;
	let prev = 1;

	let result = [];
	for (let i = 0; i < n; i++) {
		result.push(cur);
		[cur, prev] = [cur + prev, cur];
	}

	return result;
}

console.log("\n  1.5*:");
console.log("fibonacci[...10] =", Fibonacci(10));