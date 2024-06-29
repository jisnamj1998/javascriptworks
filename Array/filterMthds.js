var arr=[1,2,3,4,5,6]

//var evens=arr.map((num)=>num%2==0)
var evens=arr.filter((num)=>num%2==0)
//console.log(evens);

//odd

var odds=arr.filter((num)=>num%2!=0)
console.log(odds);
