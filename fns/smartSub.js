/*function smartSub(num1,num2){
    if (num1>num2){
        return num1-num2
    }
    else if(num2>num1){
        return num2-num1
    }
}
    */
console.log(smartSub(10,20)); //hoisting   
function smartSub(num1,num2){
    return num1>num2 ? num1-num2 : num2-num1
}   
