import { NEWS_FETCH_FAILURE, NEWS_FETCH_SUCCESS } from "../actions/type";

const initialState = {
  news: [],
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCH_SUCCESS:
      return {
        ...state,
        news: action.payload,
        error: null,
      };
    case NEWS_FETCH_FAILURE:
      return {
        ...state,
        news: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
