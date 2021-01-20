import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  TOGGLE_TASKS,
  CLEAR_COMPLETED_TASKS,
} from "./todoListActionCreators.js";

const initialState = {
  todoList: [],
};

const todoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        todoList: [
          ...state.todoList,
          {
            id: "id" + Math.random(),
            text: payload,
            isDone: false,
          },
        ],
      };

    case DELETE_TASK:
      return {
        todoList: [...state.todoList.filter((elm) => payload.id !== elm.id)],
      };

    case TOGGLE_TASK:
      return {
        todoList: [
          ...state.todoList.map((elm) => {
            if (payload.id === elm.id) {
              elm.isDone = !elm.isDone;
            }

            return elm;
          }),
        ],
      };

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
      let toggleToDone = state.todoList.some((elm) => !elm.isDone);

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

export default todoListReducer;
