
const input=document.getElementById("input");
const button=document.getElementById("button");
const text=document.getElementById("text")

const outputBox=document.getElementById("output-box");

let notes=[];
let title=[];

function displaynotes(){
    outputBox.innerHTML=""
    for(let i=0;i<notes.length;i++){
    
    const div=document.createElement("div");
    const btndiv=document.createElement("div");
    const p1=document.createElement("p");
    const p2=document.createElement("p");
    const delBtn=document.createElement("button");
    const editBtn=document.createElement("button");
    
    p1.textContent="Title:-"+title[i];
    p2.textContent="Notes:-"+notes[i];

    delBtn.textContent="Delete"
    editBtn.textContent="Edit"
    
    
    delBtn.addEventListener("click",()=>{
        notes.splice(i,1);
        title.splice(i,1);
        displaynotes();
    });
    
    editBtn.addEventListener("click",()=>{
        input.value=title[i];
        text.value=notes[i];
        displaynotes()
         notes.splice(i,1);
        title.splice(i,1);
    });

    delBtn.className="btn btn-danger text-white"
    editBtn.className="btn btn-warning ms-3 text-white"

    div.appendChild(p1);
    div.appendChild(p2);
    btndiv.appendChild(delBtn);
    btndiv.appendChild(editBtn);

    outputBox.appendChild(div);
    div.appendChild(btndiv);
}
}
    
button.addEventListener("click",()=>{
    const value=input.value;
    const notebody=text.value
    notes.push(notebody);
    title.push(value);
    displaynotes();
    input.value=""
    text.value=""
});
displaynotes();

