import { USER_FAILURE, USER_LOGIN } from "../actions/type";

const initialState = {
  userInfo: [],
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        userInfo: action?.payload, // Use action.payload instead of payload
        error: null,
      };
    }
    case USER_FAILURE: {
      return {
        ...state,
        userInfo: null, // Use action.payload instead of payload
        error: action?.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
