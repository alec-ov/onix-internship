const task = "Given the line 'I-know-javascript!'. Replace all characters with '!'";

const str = "I-know-javascript!";
console.log("  2.3:", task);
console.log("(1):", str.replace(/./g, "!"));
console.log("(2):", "!".repeat(str.length));