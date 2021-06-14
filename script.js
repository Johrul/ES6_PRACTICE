"use strict"
class father{


    greet(){
        console.log("Hi I am from Parent");
    }
    constructor(name)
    {
        console.log("Hi am from constructor", this.name);
    }
    
}

// var v=new father();
// v.greet();
class son extends father{
    
      callar(){
          
          super.greet();
      }
}
//(new father()).greet();

//(new son()).greet();

 //  father.greet();
 //(new son()).callar()

 var obj = new son();

 obj.callar();
