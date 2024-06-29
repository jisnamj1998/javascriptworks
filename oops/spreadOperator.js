var colors=["green","blue","yellow"]

var copyColors=[...colors]  // ... ->spread operator
colors.pop()
console.log(colors);        // both have diff memeory locatn

console.log(copyColors);

// updated

colors1=["green","blue","yellow"]
var copyColors1=[...colors1,"purple"]
console.log(colors1);
console.log(copyColors1);

//updated isActive


var user={name:"jisna",email:"j@gmail.com",password:"J123",isActive:true}

var userCopy={... user}

userCopy.isActive=false

console.log(user);
console.table(userCopy);


var product={id:1,name:"m23",brand:"samsung",isActive:false}

var productCopy={...product,isActive:true}
console.log(productCopy);