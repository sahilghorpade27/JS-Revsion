
//Asynchronucs Function
/*
console.log("hello");

setTimeout(()=>{
    console.log("after time out")
},4000);
*/

// Call back function 

/*
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcallback){
    sumcallback(a,b);
}

calculator(1,2,sum);

*/


//////////// Call back hell 
/*
function getdata(dataid){
    console.log("data ",dataid);
}

getdata(1);
getdata(2);
*/

/////////////// this is 2nd type but the call back are executibng at the same time due to this the setime out function executes the  fucntion at the same time 

/*
function getdata(dataid){
    setTimeout(()=>{
        console.log("data ",dataid);
    },2000);
}

getdata(1);
getdata(2);

*/

///////////////////// Now to execute at different time we use the call back hell 
/*

function getdata(dataid , getnextdata){
    setTimeout(()=>{
        console.log("data ",dataid);
        if(getnextdata){
            getnextdata();
        }
    },2000);
}

getdata(1, ()=>{
    console.log("getting data 2 .......");
    getdata(2,()=>{
        console.log("getting data 3 .......");
        getdata(3,()=>{
            console.log("getting data 4 .......");
            getdata(4);
        });
    });
});

// to keep it more eaiser using promises 
getdata(1)
   .then((res)=>{
    return getdata(2);
   })
   .then((res)=>{
    return getdata(3);
   })
   .then((res)=>{
    console.log(res);
   })

   */


/////// Promises 
/*
let promise = new Promise((resolve,reject)=>{
    console.log("i am a promise");
    //resolve(123);
    reject("error occured")
})
*/

/*

function getdata(dataid , getnextdata){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data ",dataid);
            resolve("Success");
            if(getnextdata){
                getnextdata();
            }
        },5000);
    })
}

*/


////////// Promises then an Catch 

/*
const getPromise = () =>{
    return new Promise((resolve,reject) => {
        console.log("I am  promise");
        resolve("Promise Success");
        //reject("Rejected due to error");

    }) ;
}

let promise = getPromise() ;
promise.then((res)=>{
    console.log("Promise fullfilled : ",res);
})

promise.catch((err)=>{
    console.log("Something error : ",err);
})

*/

//////////////////////   PRmoise Chaining ///////////////

/*

function asyncfunc1(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("data1")
            resolve("success");
        },4000);
    })
}


function asyncfunc2(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("data2")
            resolve("success");
        },4000);
    })
}

//console.log("fetching data 1 ........");
let p1 = asyncfunc1() ;
p1.then((res)=>{
    console.log("Fetching data 2........");
    let p2 = asyncfunc2() ;
    p2.then((res)=>{})
});
*/



//////////////////////////////////    Async Await ////////////////////////////

/*
async function hello() {
    console.log("hello");    
}
*/

/*
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        },2000);
    })
}

async function getweather() {
    await api();
    await api();    
}

*/


////Async await example by Get data example 

function getdata(dataid){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data ",dataid);
            resolve("success promise");
        },2000);
    });    
}

async function getAlldata() {
    console.log("getting data 1.... ");
    await getdata(1);
    console.log("getting data 2.... ");
    await getdata(2);
    console.log("getting data 3.... ");
    await getdata(3);
    console.log("getting data 4.... ");
    await getdata(4);

}