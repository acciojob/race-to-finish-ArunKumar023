const promises = [
  new Promise(resolve => setTimeout(() => resolve(1), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(2), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(3), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(4), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(5), Math.floor(Math.random() * 5000) + 1000))
];

Promise.any(promises)
  .then(result => {
    const output = document.getElementById('output');
    output.textContent = `Promise resolved with result: ${result}`;
  })
  .catch(error => console.log(error));
