
const text=document.getElementById("text");
const btn=document.getElementById("btn");
const output=document.getElementById("output");

output.textContent=localStorage.getItem("text");
btn.addEventListener("click",()=>{
    output.textContent=text.value
    localStorage.setItem("text",text.value);
});
