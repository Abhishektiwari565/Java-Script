
// API is Everything.

// API is one type of URL.
// it is create bridge between client and server and also play a role of mediator.
// who is client ==> send request to the server
// who is server ==>those give response on request given by client.
// Request is one type of input which is in the form of question.
// Those request send client to the server then server process on request then send output that is response.

let posts=[];
async function fetchApi(){
   const response = await fetch("https://fakestoreapi.com/products/");
   const json = await response.json();
   return json;
}

async function starter(){
    const posts=await fetchApi();
    posts.map((post,index)=>{
       document.writeln((index+1)+post.id+"<br>");
    });
}
starter();