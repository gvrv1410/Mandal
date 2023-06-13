// import { ADD_TODO } from "../actions/type";

import { USER_LOGIN } from "../actions/type";

const initialState = {
  userInfo: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        userInfo: payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
