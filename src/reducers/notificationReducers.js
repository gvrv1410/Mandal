import {
  NOTIFICATION_FETCH_FAILURE,
  NOTIFICATION_FETCH_SUCCESS,
} from "../actions/type";

const initialState = {
  notification: [],
  error: null,
};

const notificationReducers = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_FETCH_SUCCESS:
      return {
        ...state,
        notification: action.payload,
        error: null,
      };
    case NOTIFICATION_FETCH_FAILURE:
      return {
        ...state,
        notification: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default notificationReducers;
