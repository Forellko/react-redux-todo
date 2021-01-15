import initialState from "../todoListInitialState";
import { CLEAR_COMPLETED_TASKS, TOGGLE_TASKS } from "./manipulationActions";

const manipulationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_COMPLETED_TASKS:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((elm) => {
            if (elm.isDone) return false;
            return true;
          }),
        ],
      };

    case TOGGLE_TASKS:
      let toggleToDone = false;
      state.todoList.forEach((elm) => {
        if (!elm.isDone) {
          toggleToDone = true;
        }
      });

      return {
        ...state,
        todoList: [
          ...state.todoList.map((elm) => {
            elm.isDone = toggleToDone;
            return elm;
          }),
        ],
      };

    default:
      return state;
  }
};

export default manipulationReducer;
