import filterInitialState from "./filterInitialState";
import { FILTER_TASKS } from "./filterActions";

const filterReducer = (state = filterInitialState, { type, payload }) => {
  switch (type) {
    case FILTER_TASKS:
      return {
        filter: payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
