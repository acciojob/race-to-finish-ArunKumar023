const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000))
];

Promise.any(promises)
  .then(result => {
    const output = document.getElementById("output");
    output.textContent = `The first promise to resolve returned ${result.toFixed(2)} seconds.`;
  });


Promise.any(promises)
  .then(result => {
    const output = document.getElementById('output');
    output.textContent = `Promise resolved with result: ${result}`;
  })
  .catch(error => console.log(error));
