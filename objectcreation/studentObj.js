var student={
    name:"jisna",
    course:"django",
    degree:"msc",
    location:"pkd",
    points:10
}

console.log(student.name);
console.log(student.course);
student.age="26"
console.log(student);

// to check a ppty in object

if ("location" in student){
    console.log("present");
}
else{
    console.log("abscent");
}

// if points exist add extra 10 point to this else set point as 15

if ("points" in student){

    student.points+=10
}
else{
    student.points=15
}

console.log(student);