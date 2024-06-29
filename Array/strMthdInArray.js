var arr=["project","profile","profession","programme"]

var upperCaseArr=arr.map((obj)=>obj.toUpperCase())

//console.log(upperCaseArr);


// length of each string

var lenStrngs=arr.map((obj)=>obj.length)
//console.log(lenStrngs);

// words starts with pro

var startPro=arr.filter((obj)=>obj.startsWith("pro"))
//console.log(startPro);

//longest word

var longestWord=arr.reduce((w1,w2)=>w1.length>w2.length ? w1 :w2)
//console.log(longestWord);

//shortest word

var shortestWord=arr.reduce((w1,w2)=>w1.length<w2.length ? w1 :w2)
console.log(shortestWord);




//sort desc with length

arr.sort((w1,w2)=>w2.length-w1.length)
console.log(arr);
    
