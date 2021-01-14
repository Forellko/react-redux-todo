import { FILTER_TASKS } from "./filterActions";

export const filterTasks = (payload) => ({
  type: FILTER_TASKS,
  payload,
});
