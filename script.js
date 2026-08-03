const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks when page loads
renderTasks();

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Add a new task
function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    renderTasks();

    taskInput.value = "";
}

// Display all tasks
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task) {

        const li = document.createElement("li");

        // Task text
        const span = document.createElement("span");
        span.textContent = task.text;
        span.classList.add("task-text");

        if (task.completed) {
            span.classList.add("completed");
        }

        span.addEventListener("click", function () {
            toggleTask(task.id);
        });

        // Button container
        const buttonGroup = document.createElement("div");

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");

        editBtn.addEventListener("click", function () {
            editTask(task.id);
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            deleteTask(task.id);
        });

        buttonGroup.appendChild(editBtn);
        buttonGroup.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(buttonGroup);

        taskList.appendChild(li);
    });
}

// Mark task as completed
function toggleTask(id) {

    tasks = tasks.map(function (task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;

    });

    saveTasks();
    renderTasks();
}

// Edit task
function editTask(id) {

    const task = tasks.find(function (task) {
        return task.id === id;
    });

    const newText = prompt("Edit your task:", task.text);

    if (newText !== null && newText.trim() !== "") {

        task.text = newText.trim();

        saveTasks();
        renderTasks();
    }
}

// Delete task
function deleteTask(id) {

    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    saveTasks();
    renderTasks();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}