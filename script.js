class father{
    
    greet(){
        console.log("Hi I am from Parent");
    }
    constructor(name)
    {
        console.log("Hi am from constructor", name);
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
 (new son()).callar()
