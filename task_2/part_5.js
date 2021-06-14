const task = "Write a function that takes a string and determines whether it is a palindrome";

console.log("  2.5:", task);

/**
 * Checks if a string is a palindrome
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
	return str.split("").reverse().join("") == str;
}

console.log("abcddcba", isPalindrome("abcddcba"));
console.log("abcdcba", isPalindrome("abcdcba"));
console.log("1234321", isPalindrome("1234321"));
console.log("1221", isPalindrome("1221"));
console.log("123221", isPalindrome("123221"));