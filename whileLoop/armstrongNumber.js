var num=153
var original=num
var digitCount=String(num).length
sum=0
while(num!=0){
    let digit=num%10
    sum=sum+digit**digitCount
    num=Math.floor(num/10)
}
console.log(sum);
console.log(original==sum ?"Armstrong" :"Not Armstrong");