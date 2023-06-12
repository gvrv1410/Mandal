import { ADD_TODO } from "../actions/type";

const initialState = {
  todos: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id, task }],
      };
    }
    default:
      return state;
  }
};

export default authReducer;
