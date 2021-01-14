import actionConsts from "./actionConsts";
import initialState from "./initialState";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionConsts.currentInputChange:
      return {
        ...state,
        currentInput: payload,
      };

    case actionConsts.add:
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

    case actionConsts.toggle:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((elm) => {
            if (payload.id === elm.id) elm.isDone = !elm.isDone;
            return elm;
          }),
        ],
      };

    case actionConsts.delete:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((elm) => {
            if (payload.id === elm.id) return false;
            return true;
          }),
        ],
      };

    case actionConsts.filter:
      return {
        ...state,
        filter: payload,
      };

    case actionConsts.clearCompleted:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((elm) => {
            if (elm.isDone) return false;
            return true;
          }),
        ],
      };

    case actionConsts.toggleAll:

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
          })
        ],
      };

    default:
      return state;
  }
};
