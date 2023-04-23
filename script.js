const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000))
];

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `The first promise to resolve with result ${result}`;
  })
  .catch(error => {
    console.log(error);
  });
