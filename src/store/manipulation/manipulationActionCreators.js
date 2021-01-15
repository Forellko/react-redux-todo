import { CLEAR_COMPLETED_TASKS, TOGGLE_TASKS } from "./manipulationActions";

export const clearCompleted = (payload) => ({
  type: CLEAR_COMPLETED_TASKS,
  payload,
});

export const toggleAll = () => ({
  type: TOGGLE_TASKS,
});
