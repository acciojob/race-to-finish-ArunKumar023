const promises = [];

// Create an array of five promises that resolve with a random time between 1 and 5 seconds
for (let i = 0; i < 5; i++) {
  promises.push(new Promise(resolve => {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => resolve(randomTime), randomTime * 1000);
  }));
}

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then(result => {
    document.getElementById("output").innerHTML = `The first promise resolved with result: ${result}`;
  })
  .catch(error => {
    console.log(error);
  });
