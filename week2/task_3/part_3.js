const task = "Rewrite as Promise.all()";
/*
const foo = new Promise((resolve, reject) => {
	resolve("Promise1");
});
const bar = new Promise((resolve, reject) => {
	resolve("Promise2");
});
console.log("Res", foo, bar);
/**/

const foo = new Promise((resolve/*, reject /**/) => {
	resolve("Promise1");
});
const bar = new Promise((resolve/*, reject /**/) => {
	resolve("Promise2");
});

Promise.all([foo, bar])
	.then(([foo, bar]) => {

		console.group("3.3*:");
		console.log(task);
		console.log("Res", foo, bar);
		console.groupEnd("3.3");
	});


