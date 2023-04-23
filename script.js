 window.promise=[
	 new Promise((resolve, reject)=>{
		 setTimeout(()=>{
			 resolve("Promise 1")
		 },1000)
	 }),
	 new Promise((resolve, reject)=>{
		 setTimeout(()=>{
			 resolve("Promise 2")
		 },2000)
	 }),
	 new Promise((resolve, reject)=>{
		 setTimeout(()=>{
			 resolve("Promise 3")
		 },3000)
	 }),
	 new Promise((resolve, reject)=>{
		 setTimeout(()=>{
			 resolve("Promise 4")
		 },4000)
	 }),
	 new Promise((resolve, reject)=>{
		 setTimeout(()=>{
			 resolve("Promise 5")
		 },5000)
	 }),
 ]

Promise.any(promises).then((result)=>{
	document.getElementById("output").innerHTML=result;
});
