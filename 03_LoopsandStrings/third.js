//for loop 
for(let i=0 ; i<3 ; i++){
    console.log("ApnaCOllege");
}


//do while loop


let j = 7;
do {
    console.log("Hello Sahil");
    j++;
} while (j < 10);


//for-of Loop 
let size =0 ;
let str = "Sahil";
for(s of str){
    console.log("s=",s);
    size++ ;
}
console.log("Size =",size);



//Strings 

let a = "Sahil" ;
console.log("Size of Str =",a.length);

let temp = `Hello` ;
let name = "Sahil" ;

console.log(`Hello ${name}`);

//MEthods 

console.log(temp.toLowerCase());
console.log(temp.toUpperCase());

let fullname = prompt("Please tell your full name");
console.log("@"+fullname+fullname.length);