let div=document.createElement("div");
let h1=document.createElement("h1");
let para=document.createElement("p");

h1.innerText="I'm in a div";
para.innerText="ME too!!";

div.append(h1);
div.append(para);
div.classList.add("div");

document.querySelector("body").append(div);