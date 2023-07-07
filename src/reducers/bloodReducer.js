import { BLOOD_DETAILS_FAILURE, BLOOD_DETAILS_SUCCESS } from "../actions/type";

const initialState = {
  blood: [],
  error: null,
};

const bloodReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOOD_DETAILS_SUCCESS:
      return {
        ...state,
        blood: action.payload,
        error: null,
      };
    case BLOOD_DETAILS_FAILURE:
      return {
        ...state,
        blood: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bloodReducer;
