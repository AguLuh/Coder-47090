const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');


const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach(function (task, index) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.innerHTML += `<button onclick="removeTask(${index})">Eliminar</button>`;
        taskList.appendChild(listItem);
    })
}

displayTasks();
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = taskInput.value;
    tasks.push(newTask);
    taskInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
});

function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
