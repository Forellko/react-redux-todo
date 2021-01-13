import actionConsts from "./actionConsts";

export const currentInputChange = (payload) => ({
  type: actionConsts.currentInputChange,
  payload,
});

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
})
