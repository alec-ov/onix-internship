const task = "Write a function that converts a string to an array of words.";
function getWords(str) {
	return str.split(/[^a-zа-яіїєґA-ZА-ЯІЇЄҐ'0-9]+/); // split on [not a letter, number or ']. "+" to ignore multiple spaces etc.
}

console.log("  2.2:", task);
const str1 = "test string with many words";
const str2 = "test string2, contains additional symbols";
const str3 = "Рядок кирилицею, містить додаткові розділові знаки; налічує дев'ять слів";

console.log("'" + str1 + "' :", getWords(str1));
console.log("'" + str2 + "' :", getWords(str2));
console.log("'" + str3 + "' :", getWords(str3));