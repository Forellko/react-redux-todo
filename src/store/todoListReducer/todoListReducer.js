/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { DELETE_TASK } from "../modificReducer/todoListActions";
import { TOGGLE_TASK } from "../modificReducer/todoListActions";
import { ADD_TASK } from "../modificReducer/todoListActions";

// HERE
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
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
        ...state,
        todoList: [
          ...state.todoList.filter((elm) => {
            if (payload.id === elm.id) return false;
            return true;
          }),
        ],
      };

    case TOGGLE_TASK:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((elm) => {
            if (payload.id === elm.id) elm.isDone = !elm.isDone;
            return elm;
          }),
        ],
      };
  }
};
