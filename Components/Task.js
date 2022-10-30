import { CheckIcon, TrashIcon } from "../Consts";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

export default class Task {
  constructor(taskText, isCompleted = false) {
    this.Text = taskText;
    this.IsCompleted = isCompleted;
    this.Id = uuidv4();
  }

  render() {
    const taskCompletedClass = this.IsCompleted ? `class="completed"` : "";
    return `
    <div class="TodoListItem">
      <p ${taskCompletedClass}>${this.Text}</p>
      <div class="TodoListItem-Buttons">
        ${
          this.IsCompleted
            ? ""
            : Button(CheckIcon, this.Id, "btn", "TodoListItem-CompleteButton")
        }
        ${Button(TrashIcon, this.Id, "btn", "TodoListItem-DeleteButton")}
      </div>
    </div>
    `;
  }
}
