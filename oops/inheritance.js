// parent class

class Parent{
    m1(){
        console.log("inside parent m1 mthd");
    }
}

//inherited child class

class Child extends Parent{
    m2(){
        console.log("inside child m2 mthd");
    }
}

const obj=new Child()
obj.m1()
obj.m2()