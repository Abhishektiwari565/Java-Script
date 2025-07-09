
const tBody=document.getElementById("tBody");

//  <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>

function displayTodos(todos){
    todos.map((todo)=>{
const tr=document.createElement("tr");
const td1=document.createElement("td");
const td2=document.createElement("td");
const td3=document.createElement("td");
const td4=document.createElement("td");

td1.textContent=todo.id;
tr.appendChild(td1);

td2.textContent=todo.todo;
tr.appendChild(td2);

td3.textContent=todo.completed;
tr.appendChild(td3);

td4.textContent=todo.userId;
tr.appendChild(td4);

tBody.appendChild(tr);
});
}
 

fetch("https://dummyjson.com/todos")
.then((Response)=>Response.json())
.then((data)=>{
    displayTodos(data.todos)
});
