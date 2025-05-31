
const textBtn=document.getElementById("textBtn");
const addBtn=document.getElementById("addBtn");
const upBtn=document.getElementById("upBtn");
const lowBtn=document.getElementById("lowBtn");
const clearBtn=document.getElementById("clearBtn");
const wordsBtn=document.getElementById("wordsBtn");
const preBtn=document.getElementById("preBtn");
const timeBtn=document.getElementById("timeBtn");
const charBtn=document.getElementById("charBtn");



addBtn.addEventListener("click",()=>{
 let newText=textBtn.value;
 preBtn.textContent=newText;
 charBtn.textContent="Total character:"+newText.length;
 let array=newText.split(" ")
 wordsBtn.textContent="Total words:"+array.length;
 let seconds=array.length*0.25
            let h,m,s;
            m=Math.floor(seconds/60);
            s=seconds%60;
            h=Math.floor(m/60);
            m=m%60;
            timeBtn.textContent=h+m+s+"s";
});
            
          

        
        
       

upBtn.addEventListener('click',()=>{
let newText=textBtn.value;
preBtn.textContent=newText.toUpperCase();
});

lowBtn.addEventListener("click",()=>{
    let newText=textBtn.value;
    preBtn.textContent=newText.toLowerCase();
})

clearBtn.addEventListener("click",()=>{
    textBtn.value="";
    preBtn.textContent="";
});

