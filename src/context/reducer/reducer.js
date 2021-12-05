export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) => {
    cart?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
      case "ADD_TO_BASKET":
          return {
              ...state,
              cart: [...state.cart, action.payload]
          }
    default:
      return state;
  }
};

export default reducer;