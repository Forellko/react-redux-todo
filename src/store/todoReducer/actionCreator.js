import actionConsts from "./actionConsts";

export const addTask = (payload) => ({
  type: actionConsts.add,
  payload,
});

export const toggleTask = (payload) => ({
  type: actionConsts.toggle,
  payload,
});

export const deleteTask = (payload) => ({
  type: actionConsts.delete,
  payload,
});

export const filterTask = (payload) => ({
  type: actionConsts.filter,
  payload,
});

export const clearCompleted = (payload) => ({
  type: actionConsts.clearCompleted,
  payload,
});

export const toggleAll = () => ({
  type: actionConsts.toggleAll,
});
