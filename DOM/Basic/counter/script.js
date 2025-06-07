
const add=document.getElementById("add");
const counter=document.getElementById("counter") 
let count=0;

add.addEventListener('click',()=>{
    count++;
    let span=document.createElement("span");
    span.textContent=count;
    counter.appendChild(span);
})