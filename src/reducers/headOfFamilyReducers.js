import { HEAD_FAMILY_FAILURE, HEAD_FAMILY_SUCCESS } from "../actions/type";

const initialState = {
  headFamily: [],
  error: null,
};

const headOfFamilyReducers = (state = initialState, action) => {
  switch (action.type) {
    case HEAD_FAMILY_SUCCESS:
      return {
        ...state,
        headFamily: action.payload,
        error: null,
      };
    case HEAD_FAMILY_FAILURE:
      return {
        ...state,
        headFamily: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default headOfFamilyReducers;
