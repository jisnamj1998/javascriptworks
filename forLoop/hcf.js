var num1=10
var num2=15
var smallestNumber=num1<num2 ? num1 :num2
var hcf=1
for(i=1;i<=smallestNumber;i++){
    if(num1%i==0 && num2%i==0){
        hcf=i
    }
}
console.log(hcf);