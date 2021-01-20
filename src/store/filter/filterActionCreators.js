export const FILTER_TASKS = "filter/filter-tasks";

export const filterTasks = (payload) => ({
  type: FILTER_TASKS,
  payload,
});
