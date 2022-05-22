// DOM cache
const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");


// event listeners
todoBtn.addEventListener("click", addTodo);


// functions
function addTodo(event) {
    // prevent form from submitting
    event.preventDefault()
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // completed btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);
    // delete btn
    const deletedBtn = document.createElement('button');
    deletedBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deletedBtn.classList.add('delete-btn');
    todoDiv.appendChild(deletedBtn);
    // append to list
    todoList.appendChild(todoDiv)
    // clear todo input value and focus
    todoInput.value = "";
    todoInput.focus();
}