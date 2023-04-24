window.promises = [];
// Do not change the code above this

// add your promises to the array `promises`
let x = Math.floor(Math.random() * 5) + 1;
console.log(x);
let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("1");
	}, x * 1000)
});

let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("2");
	}, x * 1000)
})
	let promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("3");
	}, x * 1000)
})
	let promise4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("4");
	}, x * 1000)
})
	let promise5 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("5");
	}, x * 1000)
})

	promises.push(promise1);
	promises.push(promise2);
	promises.push(promise3);
	promises.push(promise4);
	promises.push(promise5);

	Promise.any(promises).then((value) => {
    document.getElementById("output").innerText = value;
  });
