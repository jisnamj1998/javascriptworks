var num1=167
var num2=872
/*
var lastDigitNum1=num1%10
var lastDigitNum2=num2%10
if (lastDigitNum1>lastDigitNum2){
    console.log(`last digit maximum is ${num1}`);
}
else{
    console.log(`last digit maximum is ${num2}`);
}
    */
if (num1%10 >num2%10){
    console.log(`last digit max is ${num1}`);
}  
else{
    console.log(`last digit max is ${num2}`);
} 
//ternary operator
console.log(num1%10>num2%10 ? num1 : num2);