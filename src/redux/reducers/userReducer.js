import { ADD_NEW_USER, LOGIN_USER } from '../actions/types'

const initialState = {
  items: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        items: action.payload,
      };
      case LOGIN_USER:
        return {
          ...state,
          items: action.payload
        }
    default:
      return state;
  }
};