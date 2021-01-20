import { createSelector } from "reselect";

const todoListSelector = (state) => state.todoListReducer.todoList;
const filterSelector = (state) => state.filterReducer.filter;
const selectFilter = createSelector(
  [todoListSelector, filterSelector],
  (todoList, filter) => {
    switch (filter) {
      case "all":
        return todoList;

      case "completed":
        return todoList.filter((elm) => {
          return elm.isDone;
        });

      case "active":
        return todoList.filter((elm) => {
          return !elm.isDone;
        });

      default:
        return todoList;
    }
  }
);

export default selectFilter;
