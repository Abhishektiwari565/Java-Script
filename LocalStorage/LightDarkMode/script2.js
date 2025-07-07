
// const on=document.getElementById("on");
// const of=document.getElementById("of");
// const box1=document.getElementById("box1");
// const box2=document.getElementById("box2");
// const btn2=document.getElementById("btn2")

// on.addEventListener("click",()=>{
//     box1.style.backgroundColor="#1e1e2f";
//     box1.style.color="#f1f1f1";
//       box1.textContent="Dark Mode"
// });
// of.addEventListener("click",()=>{
//     box1.style.backgroundColor="#f4f9ff";
//     box1.style.color="#222";
//     box1.textContent="Light Mode"
// })

// on.addEventListener("click",()=>{
//     box2.style.backgroundColor="#003C43";
//     box2.style.color="#F8F6F4";
//      box2.textContent="Dark Mode"
     
// });
// of.addEventListener("click",()=>{
//     box2.style.backgroundColor="#FFE5B4";
//     box2.style.color="#3B3B3B";
//     box2.textContent="light mode"
// })


const on = document.getElementById("on");
const of = document.getElementById("of");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const btn2 = document.getElementById("btn2");

// Load theme from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        on.click(); // simulate dark mode
    } else if (theme === "light") {
        of.click(); // simulate light mode
    }
});

on.addEventListener("click", () => {
    // Apply dark mode styles
    box1.style.backgroundColor = "#1e1e2f";
    box1.style.color = "#f1f1f1";
    // box1.textContent = "Dark Mode";

    box2.style.backgroundColor = "#003C43";
    box2.style.color = "#F8F6F4";
    // box2.textContent = "Dark Mode";

    // Save in localStorage
    localStorage.setItem("theme", "dark");
});

of.addEventListener("click", () => {
    // Apply light mode styles
    box1.style.backgroundColor = "#f4f9ff";
    box1.style.color = "#222";
    // box1.textContent = "Light Mode";

    box2.style.backgroundColor = "#FFE5B4";
    box2.style.color = "#3B3B3B";
    // box2.textContent = "Light Mode";

    // Save in localStorage
    localStorage.setItem("theme", "light");
});
