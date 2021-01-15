import {
  ADD_TASK,
  CLEAR_COMPLETED_TASKS,
  DELETE_TASK,
  TOGGLE_TASK,
  TOGGLE_TASKS,
} from "./todoListActions";

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
