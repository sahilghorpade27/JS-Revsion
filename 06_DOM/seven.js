
//Getting attribute 

/*

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

*/

//Setting the Attribute 

/*
let div = document.querySelector("div");
div.setAttribute("class","newclass");
console.log(div.getAttribute("class"));

*/


//Style 

/*
let div = document.querySelector("div");
div.style.backgroundColor = "yellow"
div.style.color = "Red";
*/


////////////////////Insert Elements


//created button 

/*
let newbtn = document .createElement("button");
newbtn.innerText = "Click me to say hello" ;
newbtn.style.backgroundColor = "blue" ;
newbtn.style.color = "white";
console.log(newbtn);

let div = document.querySelector("div");
div.append(newbtn);
div.before(newbtn);
div.after(newbtn);
div.prepend(newbtn);

*/



//created heading

/*
let newhead = document.createElement("h1");
newhead.innerText = "Hello I am new Heading" ;
newhead.style.color = "Blue";

document.querySelector("body").before(newhead);

*/


//remove node
/*

newhead.remove();
newbtn.remove();

*/