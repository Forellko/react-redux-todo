export const ADD_TASK = "todoList/add-task";
export const DELETE_TASK = "todoList/delete-task";
export const TOGGLE_TASK = "todoList/toggle-task";
export const CLEAR_COMPLETED_TASKS = "manipulation/clear-completed-tasks";
export const TOGGLE_TASKS = "manipulation/toggle-tasks";

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
});

export const toggleTask = (payload) => ({
  type: TOGGLE_TASK,
  payload,
});

export const clearCompleted = (payload) => ({
  type: CLEAR_COMPLETED_TASKS,
  payload,
});

export const toggleAll = () => ({
  type: TOGGLE_TASKS,
});
