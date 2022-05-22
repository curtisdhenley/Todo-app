// DOM cache
const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
const filterOption = document.getElementById("filter-todo");


// event listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


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
};

function deleteCheck(event) {
    const item = event.target;
    // delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        // delete animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    };

    // complete todo
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        filterTodo();
    }

};

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        if (todo.nodeType === Node.ELEMENT_NODE) {
            switch (filterOption.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "not completed":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    });
}