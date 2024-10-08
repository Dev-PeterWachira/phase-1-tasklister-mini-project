document.addEventListener("DOMContentLoaded", () => {
const taskForm = document.getElementById("create-task-form");
const taskInput = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");
});

const createTask = (event) => {
  event.preventDefault();
  const taskDescription = taskInput.value;
  if (taskDescription === ""){
    alert("kindly enter a value");
    return;

  }
  const newTask = document.createElement("li");
  newTask.textContent = taskDescription;
  const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; 
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTask); 
    });
    newTask.appendChild(deleteButton); 
    taskList.appendChild(newTask); 
    taskInput.value = ""; 
  };
  taskForm.addEventListener("submit", createTask);
});

