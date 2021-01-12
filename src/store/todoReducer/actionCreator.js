import actionConsts from "./actionConsts"



export const addTask = (text) => ({
  type: actionConsts.add,
  text,
})

export const toggleTask = () => ({
  type: actionConsts.toggle,
})

export const deleteTask = () => ({
  type: actionConsts.delete,
})

// export const filterTask = (filter) => ({
//   type: actionConsts.filter,
//   filter,
// })