let btn = document.querySelector(".btn1");

btn.addEventListener("click",(evt)=>{
    console.log("BTn1 was clicked");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt);

});

btn.addEventListener("click",()=>{
    console.log("button was clicked -- handler2")
});

let handler3 = ()=>{
    console.log("button was clicked -- handler3")
} ;
btn.addEventListener("click",handler3);




btn.removeEventListener("click",handler3);