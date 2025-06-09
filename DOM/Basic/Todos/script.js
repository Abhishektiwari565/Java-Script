
const inputBox = document.getElementById("input-box");
const input = document.getElementById("input");
const button = document.getElementById("button");

const outputBox = document.getElementById("output-box");

let todos = ["wake up 5AM", "workout", "breakfast", "office"]
function displaytodos() {
    outputBox.innerHTML = ""
    todos.forEach((todo, index) => {

        const div = document.createElement("div");
        const p = document.createElement("p");
        const delBtn = document.createElement("button");

        p.textContent = todo;
        delBtn.textContent = "Delete"

        div.className = "d-flex justify-content-between"
        delBtn.className = "btn btn-danger mt-3"

        div.appendChild(p);
        div.appendChild(delBtn);

        outputBox.appendChild(div);
    })

}

button.addEventListener("click", () => {
    let value = input.value;
    todos.push(value);
    displaytodos();
})
displaytodos();