import { LOG_IN, LOG_OUT } from './actionTypes';

const initialState = {
  username: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        username: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        username: null,
      };
    default:
      return state;
  }
};

export default userReducer;
