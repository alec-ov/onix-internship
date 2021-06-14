const task = `Create an object in which the key is the days of the week from Monday to Friday (working days of the week)
and the value is the number from 1-8 (hours of work), 
then from this object  create two arrays in the first to transfer all keys and in the second all values. 
And calculate total work hours.`;

console.log("\n  3.3*:", task);

const week = {
	monday: 8,
	tuesday: 6,
	wednesday: 6,
	thursday: 3,
	friday: 3
};

const weekdays = Object.keys(week);
const workHours = Object.values(week);

console.log({weekdays, workHours});

const sum = workHours.reduce((sum, el) => sum + el);

console.log("sum =", sum);