const task = `Given an array ['I', 'know', 'javascript', '!']. 
Use the join method to convert the array to the string 'I learning javascript +!'. And make the first letter capitalized.`;

const arr = ["I", "know", "javascript", "!"];

/**
 * Capitalizes the first character of the string
 * @param {string} str 
 * @returns {string} 
 */
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}
const str = capitalize(arr.join(" "));

console.log("  2.4:", task);
console.log(str);