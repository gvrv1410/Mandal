import {
  FETCH_VILLAGE_MEMBER_FAILURE,
  FETCH_VILLAGE_MEMBER_SUCCESS,
  GET_MEMBER_FAILURE,
  GET_MEMBER_SUCCESS,
  TOTAL_MEMBER_DIRECTOR_FAILURE,
  TOTAL_MEMBER_DIRECTOR_SUCCESS,
} from "../actions/type";

const initialState = {
  totalMemberDirector: [],
  fetchVillageMeber: [],
  getMember: [],
  error: null,
  villageError: null,
  memberError: null,
};

const directorReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_MEMBER_DIRECTOR_SUCCESS:
      return {
        ...state,
        totalMemberDirector: action.payload,
        error: null,
      };
    case TOTAL_MEMBER_DIRECTOR_FAILURE:
      return {
        ...state,
        totalMemberDirector: null,
        error: action.payload,
      };
    case FETCH_VILLAGE_MEMBER_SUCCESS:
      return {
        ...state,
        fetchVillageMeber: action.payload,
        villageError: null,
      };
    case FETCH_VILLAGE_MEMBER_FAILURE:
      return {
        ...state,
        fetchVillageMeber: null,
        villageError: action.payload,
      };
    case GET_MEMBER_SUCCESS:
      return {
        ...state,
        getMember: action.payload,
        memberError: null,
      };
    case GET_MEMBER_FAILURE:
      return {
        ...state,
        getMember: null,
        memberError: action.payload,
      };
    default:
      return state;
  }
};

export default directorReducers;
