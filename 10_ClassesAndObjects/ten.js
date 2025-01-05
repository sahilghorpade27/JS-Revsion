//Object 
/*
const student = {
    fullname : "Sahil Ghorpade",
    marks : 94.4 ,
    printmarks: function() {
        console.log(this.marks);
    }
}

*/


//Prototypes 

/*

const employee = {
    calcTax() {
        console.log("Tax is 10%");
    }

}

const karanarjun = {
    salary : 5000 
}

const karanarjun1 = {
    salary : 5000 
}
const karanarjun2 = {
    salary : 5000 
}
const karanarjun3 = {
    salary : 5000 
}

//Now no need to assign the calc tax function to all just set the prototype for all object an thats it 

karanarjun1.__proto__ = employee ;

*/


///////////////////////   Classes ////////////////////////////

/*
class Toyota {
    constructor(){
        console.log("Constructor Called");
    }
    start(){
        console.log("Starts");
    }

    stops(){
        console.log("Stops");
    }

    setbrand(brand){
        this.brand = brand ;
    }
}

let fortuner = new Toyota() ;
fortuner.setbrand("fortuner");

*/


//  Inheritance 

class Person {
    constructor() {
        this.species = "Homo-sapiens";
        console.log("Person constructor called")
    }
    sleep(){
        console.log("person sleeps");
    }

    eats(){
        console.log("person eats");
    }
}

class Engineer extends Person {
    constructor(branch){
        super(); //to invoke the parent class connstructor   , otherwise the error will occur due to use of this key word ;
        this.branch = branch ;
        console.log("engg constructor called");
    }
    works(){
        console.log("solves Problems");
    }
}

sahil = new Engineer("entc") ;
sahil.sleep();