// JSON - JavaScript Object Notation

import Task from "./Components/Task";

// const tasksContainerNode = document.querySelector("#tasks");

// const frontendTechnologies = ["HTML", "CSS", "JavaScript", "React", "Redux"];

// const createTaskNode = (taskText) => {
//   const taskNode = document.createElement("div"); // <div></div>
//   taskNode.classList.add("TodoListItem"); // <div class="TodoListItem"></div>
//   const taskTextNode = document.createElement("p"); //<p></p>
//   taskTextNode.textContent = `Learn ${taskText}`; //<p>Learn JavaScript</p>
//   taskNode.appendChild(taskTextNode); // <div class="TodoListItem"><p>Learn JavaScript</p></div>
//   return taskNode;
// };

// const tasksNodes = frontendTechnologies.map(createTaskNode);

// tasksContainerNode.append(...tasksNodes);

const Tasks = [];

function renderTasks() {
  const tasksContainerNode = document.querySelector("#tasks");
  const tasksHtml = Tasks.map((task) => task.render()).reduce(
    (result, tech) => (result += tech),
    ""
  );
  tasksContainerNode.innerHTML = tasksHtml;
}

function addTask(taskText) {
  Tasks.push(new Task(taskText));
}

function completeTask(taskId) {
  const task = Tasks.find((task) => task.Id === taskId);
  task.IsCompleted = true;
  renderTasks();
}

function deleteTask(taskId) {
  const taskIndex = Tasks.findIndex((task) => task.Id === taskId);
  Tasks.splice(taskIndex, 1);
  renderTasks();
}

const taskTextInputNode = document.querySelector("#inputField");
taskTextInputNode.addEventListener("keydown", (keyEvent) => {
  if (keyEvent.code.toLowerCase() !== "enter") return;
  const text = keyEvent.target.value;
  addTask(text);
  renderTasks();
});

document.body.addEventListener("click", (event) => {
  const taskId = event.target.dataset.guid;
  if (!taskId) return;

  const classes = Array.from(event.target.classList);
  const parentClasses = Array.from(event.target.parentElement.classList);
  classes.concat(parentClasses);

  if (classes.includes("TodoListItem-CompleteButton")) {
    completeTask(taskId);
  } else if (classes.includes("TodoListItem-DeleteButton")) {
    deleteTask(taskId);
  }
});
