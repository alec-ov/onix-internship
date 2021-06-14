const task = "Write a function that compares two objects";

console.log("\n  3.4*:", task);

function isObject(obj) {
	return obj === Object(obj);
}

/**
 * Checks if 2 objects are equal (including inner objects)
 * @param {object} a 
 * @param {object} b 
 * @param {object[]} checked objects that should be compared only by reference (no recursive isEqual). Used for circular references
 * @returns {boolean} true if 2 objects have an indentical set of keys and values and don't have isolated* circular references
 */
function isEqual(a, b, checked = []) {
	if (Object.is(a, b)) return true;

	const entriesB = Object.entries(b);
	const entriesA = Object.entries(a);

	if (entriesB.length != entriesA.length) return false;

	// compare all properties
	const result = entriesA.every(
		([key, value]) => {
			// for non-checked objects continue recursive comparison
			if (isObject(b[key]) && isObject(value) && !checked.includes(b[key]) && !checked.includes(value)) {
				// add current objects to "checked" to prevent infinite loops(for circular refs) VV
				return isEqual( b[key], value, checked.concat([b[key], value]) ); 
			}
			else {
				return Object.is(b[key], value); // for non-object keys
			}
		}
	);
	return result;
}

const obj0 = {
	a: 1,
	b: 2,
	sub: {
		a: 0,
		b: 1
	}
};
const obj1 = {
	a: 1,
	b: 2,
	sub: {
		a: 0,
		b: 1
	}
};


console.log("(1)", obj0, "==", obj1, "=", isEqual(obj0, obj1)); // true
console.log("(2)", "self equal:", isEqual(obj0, obj1)); // true

const obj2 = {
	test: 1
};
const obj3= {
	test: 1
};
obj2.obj = obj3;
obj3.obj = obj3;
/*
obj2 = {
	test: 1,
	obj: <obj3>
};
obj3= {
	test: 1,
	obj: <obj3>
};
*/

console.log("(3)", obj2, "==", obj3, "=", isEqual(obj2, obj3)); // true

const a = {
	a: 0,
	b: {
		c: 5,
		obj0
	}
};


const b = {
	a: 0,
	b: {
		c: 5,
		obj0
	}
};

// b.b and a.b are not the same ref, but have identical properties
console.log("(4)", a, "==", b, "=", isEqual(a, b)); // true

a.obj = a;
b.obj = b;
/*
a = {
	a: 0,
	b: { c: 5, obj0 },
	obj: <a> // !
};
b = {
	a: 0,
	b: { c: 5, obj0 },
	obj: <b> // !
};
*/

console.log("(5)", a, "==", b, "=", isEqual(a, b));
// false, a.obj != b.obj and have an isolated* self reference field(deep check stops to prevent stack overflow)
// *isolated means the two reference "loops" don't cross, and therefore require more complex algorithms for recursive comparison