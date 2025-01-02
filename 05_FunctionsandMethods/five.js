function myfunction(){
    console.log("Welcome sahil");
}


function my(msg){
    console.log(msg);
    
}


//Arrow Sum 
const sum = (a,b) =>{
    console.log(a+b);
}

const print = ()=>{
    console.log("Arrow function");
}

//Practice 

//to calculate the number of viowels in String



let i=0 ;
let str = "Sahil" ;
for(s of str){
    if(s == "a" || s == "e" ||  s == "i" ||  s == "o" ||  s == "u"){
        i++ ;
    }
}
console.log(i);

const vowelcount = (st) => {
    let i=0 ;
    for(s of st){
        if(s == "a" || s == "e" ||  s == "i" ||  s == "o" ||  s == "u"){
        i++ ;
    }
}
console.log(i);
}



//FOr EACH loop

let arr = [1,2,3,4,5,6];

let new1arr = arr.forEach((val)=>{
    console.log(val);
}) ;


//MAP Method 

let newarr = arr.map((val)=>{
    return val*val ;
})

//Filter 

let new2arr = arr.filter((val)=>{
    return val%2 == 0 ;
})

//Reduce 

let new3arr = arr.reduce((res ,curr)=>{
    return res+curr ;
});

let new4arr = arr.reduce((res ,curr)=>{
    return res = Math.max(res,curr) ;
});




//Practice Qs

let marks = [10,4,0,80,90,96,97,88,50,91];

let scorer = marks.filter((val)=>{
    return val>90 ;
});


let n = prompt("Enter a number");

let ary =[];
for(let i=1 ; i<=n ; i++){
    ary.push(i);
};


let newary = ary.reduce((res,curr)=>{
        return res+curr ;
});

let new2ary = ary.reduce((res,curr)=>{
    return res*curr ;
});


