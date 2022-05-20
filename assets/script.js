// DOM cache
let ourForm = document.getElementById('ourForm');
let ourField = document.getElementById('ourField');
let ourOptions = document.getElementById('ourOptions');
let submitBtn = document.getElementById('submit-btn');
let ourTasks = document.getElementById('ourTasks');
let ourList = document.getElementById('ourList');
let completedItems = document.getElementById('completed-items');

// create a function that adds new tasks to todo list
const createTask = function(addTask) {
    let ourHTML = `<li>${addTask} <button>Completed</button><button onclick="deleteItem(this)">Delete</button></li>`;
    ourList.insertAdjacentHTML("beforeend", ourHTML);
    ourField.value = "";
    ourField.focus();
};

// create new task
ourForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createTask(ourField.value);
});

// create function that removes task from Todo
const deleteItem = function(elementToDelete) {
    elementToDelete.parentElement.remove();
}