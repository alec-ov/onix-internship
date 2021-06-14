const task = `Given the object {q: null w: null e: null r: null t: null y: null}  
make a string from the keys of this object. (do it in two or more ways)`;

console.log("\n  3.2:", task);

const obj = { q: null, w: null, e: null, r: null, t: null, y: null };

console.log("(1)", Object.keys(obj).join(""));

{
	let str = "";
	for (let key in obj) {
		str += key;
	}
	console.log("(2)", str);
}

console.log("(3)", Object.getOwnPropertyNames(obj).join(""));

console.log("(4)", Object.entries(obj).map(([key]) => key).join(""));