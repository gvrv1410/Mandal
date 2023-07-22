import { ADS_FETCH_FAILURE, ADS_FETCH_SUCCESS } from "../actions/type";

const initialState = {
  adsData: [],
  error: null,
};

const adsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADS_FETCH_SUCCESS:
      return {
        ...state,
        adsData: action.payload,
        error: null,
      };
    case ADS_FETCH_FAILURE:
      return {
        ...state,
        adsData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adsReducers;
