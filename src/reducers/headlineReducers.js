import { FETCH_HEADLINE_DATA_FAILURE, FETCH_HEADLINE_DATA_SUCCESS, FETCH_HEADLINE_IMAGE_FAILURE, FETCH_HEADLINE_IMAGE_SUCCESS } from "../actions/type";

const initialState = {
    headlineData: [],
    headlineImg: [],
    headlineImgErr: null,
    error: null,
};

const fetchHeadlineReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HEADLINE_DATA_SUCCESS:
            return {
                ...state,
                headlineData: action.payload,
                error: null,
            };
        case FETCH_HEADLINE_DATA_FAILURE:
            return {
                ...state,
                headlineData: null,
                error: action.payload,
            };
        case FETCH_HEADLINE_IMAGE_SUCCESS:
            return {
                ...state,
                headlineImg: action.payload,
                headlineImgErr: null,
            };
        case FETCH_HEADLINE_IMAGE_FAILURE:
            return {
                ...state,
                headlineImg: null,
                headlineImgErr: action.payload,
            };
        default:
            return state;
    }
};

export default fetchHeadlineReducer;


