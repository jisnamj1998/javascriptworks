var items={porotta:45,chappathi:50,gheeroast:100,biriyani:150}
var nestedArray=Object.entries(items)
var costlyItem=nestedArray.reduce((i1,i2)=>i1[1]>i2[1] ? i1 : i2)
console.log(costlyItem);
var cheapItem=nestedArray.reduce((i1,i2)=>i1[1]<i2[1] ? i1 : i2)
console.log(cheapItem);