const task = "Given the 2nd array: [1,2,3,4,5,6] and [5,6,7,8,9]. Find all unique elements.";
// assuming concatenation of 2 given arrays

console.log("\n  4.4*:", task);

function getUnique(arr) {
	return Array.from(new Set(arr));
}

function getUniqueAlt(arr) {
	return arr.filter((value, index, self) => self.indexOf(value) === index);
}


const arr0 = [1, 2, 3, 4, 5, 6];
const arr1 = [5, 6, 7, 8, 9];

const arr = [...arr0, ...arr1];

console.log(arr, "=>", getUnique(arr));
console.log("=>", getUniqueAlt(arr));