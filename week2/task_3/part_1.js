const task = `Create a function that takes 3 numeric values, each of which is placed in a separate promise.
Increase each number by 1 and return the result of the promises`;

const incrementAsync = (n) => {
	return new Promise((resolve) => {
		resolve(n + 1);
	});
};
function incrementAll(...numbers) {
	const promises = numbers.map((n) => incrementAsync(n));
	return Promise.all(promises);
}


(async ()=> {
	console.group("1.3");
	console.log(task);
	console.log(await incrementAll(23, 1, -101));
	console.groupEnd("1.3");
})();
