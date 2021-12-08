import { ADD_TO_CART } from "../actions/types";

const initialState = {
    items: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
              ...state,
              items: [...state.items, action.payload]
            };
        default: 
        return state;
    }
}