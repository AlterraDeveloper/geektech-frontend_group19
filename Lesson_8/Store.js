import { createStore } from "redux";

//JSDoc comment
/**
 * Функция с обработчиками хранилища задач (добавление, удаление и т.д.)
 * @param {*} state начальное состояние хранилища
 * @param {*} action объект с данными для изменения состояния хранилища
 * @returns обновленное состояние хранилища
 *
 * @deprecated используйте более крутую функцию из версии 2
 */
function taskReducer(state = { tasks: [], filter: "all" }, action) {
  switch (action.type) {
    case "ADD_TASK":
      state.tasks.push(action.task);
      break;
    case "COMPLETE_TASK":
      const task = state.tasks.find((task) => task.Id === action.taskId);
      task.IsCompleted = true;
      break;
    case "DELETE_TASK":
      const taskIndex = state.tasks.findIndex(
        (task) => task.Id === action.taskId
      );
      state.tasks.splice(taskIndex, 1);
      break;
    case "FILTER_TASKS":
      state.filter = action.filter;
      break;
  }

  return state;
}

// getState, dispatch, subscribe
const Store = createStore(taskReducer);
export default Store;
