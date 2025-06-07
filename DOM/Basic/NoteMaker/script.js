
const input=document.getElementById("input");
const button=document.getElementById("button");
const container=document.getElementById("container");

button.addEventListener('click',()=>{
    let value=input.value;
    let p=document.createElement("p");
    p.textContent=value;
    container.appendChild(p)
    input.value=" ";
})