const todos = [];

function createTodo() {
  console.log("submitted");
  if (document.getElementById("todoInput").value == "") return false;
  todos.push(document.getElementById("todoInput").value);
  updateDisplay();
  document.getElementById("todoInput").value = "";
  return false;
}

function removeTodo(index) {
  todos.splice(index, 1); 
  updateDisplay(); 
}

function updateDisplay() {
  const container = document.getElementById("todoList");
  container.innerHTML = "";
  todos.map((todo, i) => {
    const div = document.createElement("div");
    div.className = "todoListInner";
    div.appendChild(document.createElement("p"));
    div.querySelector("p").innerHTML = todo;
    const removeButton = document.createElement("button"); 
    removeButton.innerHTML = "remove"; 
    removeButton.onclick = function () {
      removeTodo(i); 
    }; 
    div.appendChild(removeButton); 
    container.appendChild(div);
  });
}
