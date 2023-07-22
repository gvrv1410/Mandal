import {
  BLOOD_DETAILS_FAILURE,
  BLOOD_DETAILS_SUCCESS,
  DONER_FETCH_FAILURE,
  DONER_FETCH_SUCCESS,
} from "../actions/type";

const initialState = {
  donors: [],
  error: null,
};

const donorReduers = (state = initialState, action) => {
  switch (action.type) {
    case DONER_FETCH_SUCCESS:
      return {
        ...state,
        donors: action.payload,
        error: null,
      };
    case DONER_FETCH_FAILURE:
      return {
        ...state,
        donors: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default donorReduers;
