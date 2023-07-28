import {
  ADD_BUSINESS_DETAILS_FAILURE,
  ADD_BUSINESS_DETAILS_SUCCESS,
  BUSINESS_FETCH_FAILURE,
  BUSINESS_FETCH_SUCCESS,
} from "../actions/type";

const initialState = {
  businessDetails: [],
  addBusinessDetails: null,
  addBusinessDetailError: null,
  error: null,
};

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUSINESS_FETCH_SUCCESS:
      return {
        ...state,
        businessDetails: action.payload,
        error: null,
      };
    case BUSINESS_FETCH_FAILURE:
      return {
        ...state,
        businessDetails: null,
        error: action.payload,
      };
    case ADD_BUSINESS_DETAILS_SUCCESS:
      return {
        ...state,
        addBusinessDetails: action?.payload,
        addBusinessDetailError: null,
      };
    case ADD_BUSINESS_DETAILS_FAILURE:
      return {
        ...state,
        addBusinessDetails: null,
        addBusinessDetailError: action?.payload,
      };
    default:
      return state;
  }
};

export default businessReducer;
