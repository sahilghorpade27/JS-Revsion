let btn = document.querySelector("#btn1");

btn.onclick = (evt)=>{
    console.log("button was clicked");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
    console.log(evt);

}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
}