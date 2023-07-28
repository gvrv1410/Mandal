import { COMMITY_FETCH_FAILURE, COMMITY_FETCH_SUCCESS } from "../actions/type";

const initialState = {
  commity: [],
  error: null,
};

const commityReducers = (state = initialState, action) => {
  switch (action.type) {
    case COMMITY_FETCH_SUCCESS:
      return {
        ...state,
        commity: action.payload,
        error: null,
      };
    case COMMITY_FETCH_FAILURE:
      return {
        ...state,
        commity: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commityReducers;
