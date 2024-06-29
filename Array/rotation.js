var arr=[10,20,30,40]

var k=2

for(i=1;i<=k;i++){
    let lastElement=arr.pop();
    arr.unshift(lastElement)
}

console.log(arr);
