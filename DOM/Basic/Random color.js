
// DOM=document object model.

//Dom create bridge between javascript and html.


let heading=document.getElementById("submit-btn");

heading.addEventListener("click",()=>{
let randomNumber=Math.random()*16777216;
let random=Math.floor(randomNumber);
let color=random.toString(16);

document.body.style.backgroundColor="#"+color;
heading.textContent=color
});



