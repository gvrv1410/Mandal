import { SPONSOR_FETCH_FAILURE, SPONSOR_FETCH_SUCCESS } from "../actions/type";

const initialState = {
  sponsors: [],
  error: null,
};

const sponsorReducers = (state = initialState, action) => {
  switch (action.type) {
    case SPONSOR_FETCH_SUCCESS:
      return {
        ...state,
        sponsors: action.payload,
        error: null,
      };
    case SPONSOR_FETCH_FAILURE:
      return {
        ...state,
        sponsors: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sponsorReducers;
