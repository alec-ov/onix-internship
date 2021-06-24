// 1.2
const task = "Rewrite as async/await pattern";
function callApi() {
	return fetch("url/to/api/endpoint") //some amazing endpoint
		.then(resp => resp.json())
		.then(data => {
			// datas
		}).catch(err => {
			// errors
		});
}
async function callApiAsync() {
	try {
		return (await fetch("url/to/api/endpoint")).json(); //some amazing endpoint
	} catch (err) {
		// errors
	}
}