// synchronous js shows asynchronous behaviour

setTimeout(()=>{
    console.log("line1"); //fifth work    (callback fn,time delay)
},2000)

console.log("line 2");  // first work

setTimeout(()=>{
    console.log("line3"); // third work
},0)

console.log("line 4");   // second work

setTimeout(()=>{
    console.log("line 5"); // fourth work
},1000)