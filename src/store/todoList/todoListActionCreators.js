import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./todoListActions";

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
