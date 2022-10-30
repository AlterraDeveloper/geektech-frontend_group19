// JSON - JavaScript Object Notation

import Task from "./Components/Task";
import Store from "./Store";

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

Store.subscribe(renderTasks);

function renderTasks() {
  const tasksContainerNode = document.querySelector("#tasks");
  const tasksHtml = Store.getState()
    .tasks.filter((task) => {
      switch (Store.getState().filter) {
        case "completed":
          return task.IsCompleted;
        case "uncompleted":
          return !task.IsCompleted;
        case "all":
        default:
          return true;
      }
    })
    .map((task) => task.render())
    .reduce((result, tech) => (result += tech), "");
  tasksContainerNode.innerHTML = tasksHtml;
}

function addTask(taskText) {
  const action = {
    type: "ADD_TASK",
    task: new Task(taskText),
  };
  Store.dispatch(action);
}

function completeTask(taskId) {
  const action = {
    type: "COMPLETE_TASK",
    taskId,
  };
  Store.dispatch(action);
}

function deleteTask(taskId) {
  const action = {
    type: "DELETE_TASK",
    taskId,
  };
  Store.dispatch(action);
}

const taskTextInputNode = document.querySelector("#inputField");
taskTextInputNode.addEventListener("keydown", (keyEvent) => {
  if (keyEvent.code.toLowerCase() !== "enter") return;
  const text = keyEvent.target.value;
  addTask(text);
});

document.body.addEventListener("click", (event) => {
  const taskId = event.target.dataset.guid;
  if (!taskId) return;

  const targetClasses = Array.from(event.target.classList);
  const parentClasses = Array.from(event.target.parentElement.classList);
  const classes = targetClasses.concat(parentClasses);

  if (classes.includes("TodoListItem-CompleteButton")) {
    completeTask(taskId);
  } else if (classes.includes("TodoListItem-DeleteButton")) {
    deleteTask(taskId);
  }
});

const tasksFilterNode = document.querySelector("#filter");
tasksFilterNode.addEventListener("change", (event) => {
  const action = {
    type: "FILTER_TASKS",
    filter: event.target.value,
  };
  Store.dispatch(action);
});
