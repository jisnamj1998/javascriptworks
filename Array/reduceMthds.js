var arr=[10,11,12,13,14,15]
var add=arr.reduce((num1,num2)=>num1+num2)
//console.log(add);

var pro=arr.reduce((num1,num2)=>num1*num2)
//console.log(pro);


var maxmum=arr.reduce((num1,num2)=>num1>num2 ?num1 :num2)
//console.log(maxmum);

var minmum=arr.reduce((num1,num2)=>num1<num2 ?num1 :num2)
console.log(minmum);