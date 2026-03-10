let btn=document.createElement("button");
btn.innerText="Click Me";

let body=document.querySelector("body");
body.appendChild(btn);
btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
})