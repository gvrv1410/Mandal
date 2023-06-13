import { ADD_TODO } from "../actions/type";

const initialState = {
  todos: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { email, password } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { email, password }],
      };
    }
    default:
      return state;
  }
};

export default authReducer;
