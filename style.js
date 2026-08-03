const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});

function addTask(){

    const text = taskInput.value.trim();

    if(text === ""){
        alert("Please enter a task.");
        return;
    }

    const task = {

        id:Date.now(),

        text:text,

        completed:false

    };

    tasks.push(task);

    saveTasks();

    renderTasks();

    taskInput.value="";

}

function renderTasks(){

    taskList.innerHTML="";

    tasks.forEach(function(task){

        const li=document.createElement("li");

        const span=document.createElement("span");

        span.textContent=task.text;

        span.classList.add("task-text");

        if(task.completed){

            span.classList.add("completed");

        }

        span.addEventListener("click",function(){

            toggleTask(task.id);

        });

        const deleteBtn=document.createElement("button");

        deleteBtn.textContent="Delete";

        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click",function(){

            deleteTask(task.id);

        });

        li.appendChild(span);

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

}

function toggleTask(id){

    tasks=tasks.map(function(task){

        if(task.id===id){

            task.completed=!task.completed;

        }

        return task;

    });

    saveTasks();

    renderTasks();

}

function deleteTask(id){

    tasks=tasks.filter(function(task){

        return task.id!==id;

    });

    saveTasks();

    renderTasks();

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}