import { FILTER_TASKS } from "./filterActionCreators";

const InitialState = {
  filter: "all",
};

const filterReducer = (state = InitialState, { type, payload }) => {
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
