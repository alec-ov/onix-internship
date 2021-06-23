"use strict";

class APromise {
	thenF = null; // a promise that starts when this promise is resolved
	catchF = null; // a promise that starts when this promise is rejected
	thisF = null; // a function to be run when this promise starts

	status = null;
	result = undefined;

	/**
	 * 
	 * @param {Function} f 
	 * @param {boolean} run should this promise be started immediately
	 */
	constructor(f, run = true) {
		this.status = APromise.status.pending;
		this.thisF = f;

		if (run) this.start();
	}

	resolve = (value) => {
		this.result = value;
		this.status = APromise.status.resolved;
		this.runThen();
	};
	reject = (error) => {
		this.result = error;
		this.status = APromise.status.rejected;
		this.runCatch();
	};
	/**
	 * Launches the promise(its thisF function)
	 */
	start() {
		// run the function asynchronously
		queueMicrotask(() => {
			try {
				let result = this.thisF(this.resolve, this.reject);

				if (this.status === APromise.status.pending) { // if resolve() wasn't launched, resolve the returned value
					this.resolve(result);
				}
			}
			catch (e) { // react to errors as if they are rejections
				this.reject(e);
			}
		});
	}

	runThen() {
		if (this.thenF && this.status != APromise.status.rejected) { this.thenF.start(); }
	}
	runCatch() {
		if (this.catchF) { this.catchF.start(); }
		else if (this.thenF) { this.thenF.reject(this.result); }
	}

	/**
	 * registers a function to be run after this promise is resolved
	 * @param {Function} f a function to be run in the new promise
	 * @returns {APromise} a new promise that starts f() when this promise resolves
	 */
	then(f) {
		this.thenF = new APromise((resolve, reject) => {
			try {
				resolve(f(this.result));
			}
			catch (e) {
				reject(e);
			}
		}, false);

		if (this.status == APromise.status.resolved) {
			this.thenF.start();
		}
		return this.thenF;
	}
	/**
	 * Registers a function(error handler) to be run if this promise rejects
	 * @param {Function} f a function to be run in new promise
	 * @returns a new promise that starts f() when this promise rejects
	 */
	catch(f) {
		this.catchF = new APromise((resolve, reject) => {
			try {
				resolve(f(this.result));
			}
			catch (e) {
				reject(e);
			}
		}, false);

		if (this.status == APromise.status.rejected) {
			this.catchF.start();
		}
		return this.catchF;
	}

	toString() {
		return `APromise < ${this.status.description} >`;
	}

	static status = Object.freeze({
		pending: Symbol("pending"),
		resolved: Symbol("resolved"),
		rejected: Symbol("rejected")
	});
}

const prom = new APromise((resolve/*, reject */) => {
	console.log("1");
	resolve();
});
prom.then(() => {
	console.log("2");
}).then(() => {
	console.log("3");
}).catch((e) => {
	console.log("EE", e);
});

new APromise((resolve, /*reject */) => {
	console.log("4");
	resolve();
}).then(() => {
	console.log("5");
}).then(() => {
	console.log("6");
}).catch((e) => {
	console.log("EE", e);
});

console.log("AA");

/* expected output:
AA
1
4
2
5
3
6
*/