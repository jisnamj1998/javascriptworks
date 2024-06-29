var weightInKg=45
var heightInCms=150
var heightInMetre=heightInCms/100
var bmi=Math.round((weightInKg)/(heightInMetre**2))
console.log(bmi);
if(bmi<19){
    console.log("underweight");
}
else if(bmi<=25){
    console.log("normal");
}
else if(bmi<=30){
    console.log("overweight");
}
else{
    console.log("obese");
}