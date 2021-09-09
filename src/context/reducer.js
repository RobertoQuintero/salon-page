import { initialState } from "./initialState";
import { types } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setPath:
      return {
        path: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
