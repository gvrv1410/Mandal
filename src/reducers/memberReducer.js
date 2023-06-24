import { ADD_MEMBER_DATA_SUCCESS } from "../actions/type";

const initialState = {
    memberInfo: [],
};

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEMBER_DATA_SUCCESS: {
            return {
                ...state,
                memberInfo: payload,
            };
        }
        default:
            return state;
    }
};

export default memberReducer;
