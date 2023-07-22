import {
  ADS_FETCH_FAILURE,
  ADS_FETCH_SUCCESS,
  MUKHYA_FETCH_FAILURE,
  MUKHYA_FETCH_SUCCESS,
} from "../actions/type";

const initialState = {
  mukhyaData: [],
  error: null,
};

const mukhyaReducers = (state = initialState, action) => {
  switch (action.type) {
    case MUKHYA_FETCH_SUCCESS:
      return {
        ...state,
        mukhyaData: action.payload,
        error: null,
      };
    case MUKHYA_FETCH_FAILURE:
      return {
        ...state,
        mukhyaData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mukhyaReducers;
